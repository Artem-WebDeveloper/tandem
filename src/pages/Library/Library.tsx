import { useEffect, useState } from 'react';

import styles from './Library.module.scss';
import type { libraryQuiz } from './types';
import { fetchAllQuizzes } from '@/core/api/fetchAllQuizzes';
import ErrorNotification from '@/core/components/ErrorNotification/ErrorNotification';
import Layout from '../../core/components/Layout/Layout';
import CardQuiz from './CardQuiz/CardQuiz';
import CardSkeleton from './CardSkeleton/CardSkeleton';
import { Pagination } from '@mui/material';

const CARDS_PER_PAGE = 6;

export default function Library() {
  const [quizzesData, setQuizzesData] = useState<libraryQuiz[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalPages = quizzesData ? Math.ceil(quizzesData.length / CARDS_PER_PAGE) : 1; // позже данное значение будет получено с сервера

  const currentPageQuizzes = quizzesData
    ? quizzesData.slice((currentPage - 1) * CARDS_PER_PAGE, currentPage * CARDS_PER_PAGE)
    : [];

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchLibraryData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchAllQuizzes();
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
  }, []);

  return (
    <>
      <Layout>
        <h2 className={styles.title}>Library</h2>
        {/* <div className={styles.container}> */}
        {loading && (
          <ul className={styles.cards}>
            {Array.from({ length: CARDS_PER_PAGE }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </ul>
        )}
        {error && <ErrorNotification message={error} />}

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
        {/* </div> */}
      </Layout>
    </>
  );
}
