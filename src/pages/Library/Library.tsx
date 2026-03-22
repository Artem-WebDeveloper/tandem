import { useEffect, useState } from 'react';
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

const SKELETON_COUNT = 6;

export default function Library() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation('library');

  const [quizzesData, setQuizzesData] = useState<LibraryQuiz[] | null>(null);
  const [countAllQuizzes, setCountAllQuizzes] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);
  const [filters, setFilters] = useState<LibraryFilters>({
    section: 'all',
    type: 'all',
    difficulty: 'all',
  });

  const currentPage = Number(searchParams.get('page')) || 1;

  const totalPages =
    countAllQuizzes && quizzesData?.length ? Math.ceil(countAllQuizzes / quizzesData.length) : 1;

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams), page: String(value) });
  };

  const handleFiltersChange = (newFilters: LibraryFilters) => {
    setFilters(newFilters);
    setSearchParams({ ...Object.fromEntries(searchParams), page: '1' });
  };

  useEffect(() => {
    const fetchLibraryData = async () => {
      try {
        setQuizzesData(null);
        setLoading(true);
        setError(null);
        setCountAllQuizzes(null);

        const data = await fetchAllQuizzes(currentPage);

        setQuizzesData(data.results);
        setCountAllQuizzes(data.count);
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
  }, [filters, currentPage]);

  return (
    <Layout>
      <h2 className={styles.title}>{t('title')}</h2>

      {!error && <Typography sx={{ mb: 1 }}>{t('description')}</Typography>}

      {!error && (
        <Filters
          allQuizzes={countAllQuizzes}
          filterValues={filters}
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
