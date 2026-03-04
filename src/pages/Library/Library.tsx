import { useEffect, useState } from 'react';
import { Pagination, Typography } from '@mui/material';

import styles from './Library.module.scss';
import type { LibraryFilters, LibraryQuiz } from './types';
import { fetchAllQuizzes } from '@/core/api/fetchAllQuizzes';
import ErrorNotification from '@/core/components/ErrorNotification/ErrorNotification';
import Layout from '../../core/components/Layout/Layout';
import Filters from './Filters/Filters';
import CardQuiz from './CardQuiz/CardQuiz';
import CardSkeleton from './CardSkeleton/CardSkeleton';

const CARDS_PER_PAGE = 6;

export default function Library() {
  const [quizzesData, setQuizzesData] = useState<LibraryQuiz[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filters, setFilters] = useState<LibraryFilters>({
    section: 'all',
    type: 'all',
    difficulty: 'all',
  });

  const totalPages = quizzesData ? Math.ceil(quizzesData.length / CARDS_PER_PAGE) : 1; // позже данное значение будет получено с сервера

  const currentPageQuizzes = quizzesData
    ? quizzesData.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE)
    : [];

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const handleFiltersChange = (newFilters: LibraryFilters) => setFilters(newFilters);

  useEffect(() => {
    const fetchLibraryData = async () => {
      try {
        setQuizzesData(null);
        setLoading(true);
        setError(null);

        const data = await fetchAllQuizzes();
        // const data = await fetchAllQuizzes(filters, currentPage); В будущем передавать на бэк фильтры и страницу

        setQuizzesData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          throw error;
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLibraryData();
  }, [filters]);

  return (
    <>
      <Layout>
        <h2 className={styles.title}>Library</h2>

        {!error && <Typography sx={{ mb: 1 }}>Выберите тест для практики</Typography>}

        {!error && (
          <Filters
            allQuizzes={quizzesData?.length ?? null}
            onFiltersChange={handleFiltersChange}
            loading={loading}
          />
        )}

        {loading && (
          <ul className={styles.cards}>
            {Array.from({ length: CARDS_PER_PAGE }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </ul>
        )}

        {error && (
          <div className={styles.errorContainer}>
            <ErrorNotification message={error} />
          </div>
        )}

        {quizzesData && (
          <>
            <ul className={styles.cards}>
              {currentPageQuizzes.map((quizData) => {
                return <CardQuiz quizData={quizData} key={quizData.id} />;
              })}
            </ul>

            {quizzesData.length > CARDS_PER_PAGE && (
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
    </>
  );
}
