import { useEffect, useState } from 'react';
import styles from './Library.module.scss';
import Layout from '../../core/components/Layout/Layout';
import CardQuiz from './CardQuiz/CardQuiz';
import { libraryData } from '@/core/mock/library';
import type { libraryQuiz } from './types';
import { fetchAllQuizzes } from '@/core/api/fetchAllQuizzes';
import ErrorNotification from '@/core/components/ErrorNotification/ErrorNotification';

export default function Library() {
  const [quizzesData, setQuizzesData] = useState<libraryQuiz[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

        {loading && <p>Loading</p>}
        {error && <ErrorNotification message={error} />}

        {quizzesData && (
          <ul className={styles.cards}>
            {libraryData.map((quizData) => {
              return <CardQuiz quizData={quizData} key={quizData.id} />;
            })}
          </ul>
        )}
      </Layout>
    </>
  );
}
