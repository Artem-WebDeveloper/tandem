import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination, Typography } from '@mui/material';

import styles from './Library.module.scss';
import type { LibraryFilters, LibraryQuiz } from './types';
import { fetchAllQuizzes } from '@/core/api/fetchAllQuizzes';
import ErrorNotification from '@/core/components/ErrorNotification/ErrorNotification';
import Layout from '../../core/components/Layout/Layout';
import Filters from './Filters/Filters';
import CardQuiz from './CardQuiz/CardQuiz';
import CardSkeleton from './CardSkeleton/CardSkeleton';
import { AppError, AppErrorCode } from '@/core/errors/errors';

import { useTranslation } from 'react-i18next';
import type { Difficulty, TaskTheme, TaskType } from '@/core/types/quiz';

const SKELETON_COUNT = 6;

export default function Library() {
  const { t } = useTranslation('library');

  const [searchParams, setSearchParams] = useSearchParams();
  const [quizzesData, setQuizzesData] = useState<LibraryQuiz[] | null>(null);
  const [countAllQuizzes, setCountAllQuizzes] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);
  const [pageSize, setPageSize] = useState<number | null>(null);

  const currentPage = Number(searchParams.get('page')) || 1;
  const filtersUrl = useMemo<LibraryFilters>(
    () => ({
      section: (searchParams.get('section') as TaskTheme) || 'all',
      quiz_type: (searchParams.get('quiz_type') as TaskType) || 'all',
      difficulty: searchParams.get('difficulty')
        ? (Number(searchParams.get('difficulty')) as Difficulty)
        : 'all',
    }),
    [searchParams],
  );

  const totalPages = countAllQuizzes && pageSize ? Math.ceil(countAllQuizzes / pageSize) : 1;

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: String(value) });
  };

  const handleFiltersChange = (newFilters: LibraryFilters) => {
    setPageSize(null);
    const params: Record<string, string> = { page: '1' };

    if (newFilters.section !== 'all') params.section = newFilters.section;
    if (newFilters.quiz_type !== 'all') params.quiz_type = newFilters.quiz_type;
    if (newFilters.difficulty !== 'all') params.difficulty = String(newFilters.difficulty);

    setSearchParams(params);
  };

  useEffect(() => {
    const fetchLibraryData = async () => {
      try {
        setQuizzesData(null);
        setLoading(true);
        setError(null);
        setCountAllQuizzes(null);

        const data = await fetchAllQuizzes(currentPage, filtersUrl);

        setQuizzesData(data.results);
        setCountAllQuizzes(data.count);
        if (currentPage === 1) {
          setPageSize(data.results.length);
        }
      } catch (error) {
        if (error instanceof AppError) {
          setError(error);
        } else {
          setError(new AppError(AppErrorCode.FETCH_FAILED, { resource: 'Library quizzes' }));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLibraryData();
  }, [currentPage, filtersUrl]);

  return (
    <Layout>
      <h2 className={styles.title}>{t('title')}</h2>

      {!error && <Typography sx={{ mb: 1 }}>{t('description')}</Typography>}

      {!error && (
        <Filters
          allQuizzes={countAllQuizzes}
          filterValues={filtersUrl}
          onSetFilters={handleFiltersChange}
          loading={loading}
        />
      )}

      {loading && (
        <ul className={styles.cards}>
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </ul>
      )}

      {error && (
        <div className={styles.errorContainer}>
          <ErrorNotification message={t(`errors.${error.code}`, error.params)} />
        </div>
      )}

      {quizzesData && (
        <>
          <ul className={styles.cards}>
            {quizzesData.map((quizData) => {
              return <CardQuiz quizData={quizData} key={quizData.id} />;
            })}
          </ul>

          {totalPages > 1 && (
            <Pagination
              className={styles.cardsPagination}
              count={totalPages}
              page={currentPage}
              siblingCount={1}
              onChange={handleChangePage}
              sx={{
                '@media (max-width: 360px)': {
                  '& .MuiPaginationItem-root': {
                    fontSize: '13px',
                  },
                },
              }}
            />
          )}
        </>
      )}
    </Layout>
  );
}
