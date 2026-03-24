import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pagination, Typography, useTheme } from '@mui/material';

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
import { parseDifficulty, parseQuizType, parseSection } from '@/core/configs/library.config';

const SKELETON_COUNT = 6;

export default function Library() {
  const theme = useTheme();
  const { t } = useTranslation('library');

  const [searchParams, setSearchParams] = useSearchParams();
  const [quizzesData, setQuizzesData] = useState<LibraryQuiz[] | null>(null);
  const [countAllQuizzes, setCountAllQuizzes] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  const currentPage = Number(searchParams.get('page')) || 1;
  const filtersUrl = useMemo<LibraryFilters>(
    () => ({
      section: parseSection(searchParams.get('section')),
      quiz_type: parseQuizType(searchParams.get('quiz_type')),
      difficulty: parseDifficulty(searchParams.get('difficulty')),
    }),
    [searchParams],
  );

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: String(value) });
  };

  const handleFiltersChange = (newFilters: LibraryFilters) => {
    setTotalPages(1);
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
        setTotalPages(data.total_pages);
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
      <Typography variant="h1" className={styles.title}>
        {t('title')}
      </Typography>

      {!error && (
        <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.secondary }}>
          {t('description')}
        </Typography>
      )}

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
