import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, useTheme } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import styles from './Practice.module.scss';

import { fetchQuizById, type QuizData } from '../../core/api/fetchQuizById';
import Layout from '../../core/components/Layout/Layout';
import QuizSkeleton from './QuizSkeleton/QuizSkeleton';
import PracticeHeader from './PracticeHeader/PracticeHeader';
import LinkButton from '../../core/components/LinkButton.tsx/LinkButton';
import ErrorNotification from '../../core/components/ErrorNotification/ErrorNotification';
import CodeCompletionWidget from '../../core/feature/CodeCompletionWidget/CodeCompletionWidget';

import SingleChoiceQuiz from '../../core/features/singleChoice/SingleChoiceQuiz';
import type { SingleChoiceTaskResponse } from '../../core/features/singleChoice/types';

export default function Practice() {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();

  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPracticeData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id === undefined) {
          throw new Error('Отсутствует идентификатор квиза');
        }

        const quizData = await fetchQuizById(id);

        setQuizData(quizData);
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

    fetchPracticeData();
  }, [id]);

  const renderQuiz = () => {
    if (!quizData) return null;

    switch (quizData.type) {
      case 'Code Completion':
        return <CodeCompletionWidget data={quizData} />;

      case 'single_choice':
        return <SingleChoiceQuiz data={quizData as SingleChoiceTaskResponse} />;

      default:
        return <p>Неизвестный тип квиза</p>;
    }
  };

  if (loading) {
    return (
      <Layout>
        <Container maxWidth="md">
          <QuizSkeleton />
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container maxWidth="md">
          <ErrorNotification message={error} />
        </Container>
      </Layout>
    );
  }

  return (
    quizData && (
      <Layout>
        <Container maxWidth="md" disableGutters={true}>
          <LinkButton href="/library">
            <ArrowBackRoundedIcon sx={{ width: '16px', marginRight: '8px' }} />
            Назад в библиотеку
          </LinkButton>
          <div
            className={styles.quizContainer}
            style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
          >
            <PracticeHeader data={quizData} />
            {renderQuiz()}
          </div>
        </Container>
      </Layout>
    )
  );
}
