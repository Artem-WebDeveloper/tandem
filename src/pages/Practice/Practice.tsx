import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, useTheme } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import { useTranslation } from 'react-i18next';

import styles from './Practice.module.scss';

import { fetchQuizById } from '../../core/api/fetchQuizById';
import { TaskType, type QuizTask } from '../../core/types/quiz';
import Layout from '../../core/components/Layout/Layout';
import QuizSkeleton from './QuizSkeleton/QuizSkeleton';
import PracticeHeader from './PracticeHeader/PracticeHeader';
import LinkButton from '../../core/components/LinkButton.tsx/LinkButton';
import ErrorNotification from '../../core/components/ErrorNotification/ErrorNotification';
import CodeCompletionWidget from '../../core/feature/CodeCompletionWidget/CodeCompletionWidget';
import { AppError, AppErrorCode } from '@/core/errors/errors';

import SingleChoiceQuiz from '../../core/feature/SingleChoiceWidget/SingleChoiceQuiz';
import AsyncSorterWidget from '@/core/feature/AsyncSorterWidget/AsyncSorterWidget';

export default function Practice() {
  const theme = useTheme();
  const { t } = useTranslation('practice');
  const { id } = useParams<{ id: string }>();

  const [quizData, setQuizData] = useState<QuizTask | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);

  useEffect(() => {
    const fetchPracticeData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id === undefined) {
          throw new AppError(AppErrorCode.MISSING_QUIZ_ID);
        }

        const quizData = await fetchQuizById(id);

        setQuizData(quizData);
      } catch (error) {
        if (error instanceof AppError) {
          setError(error);
        } else {
          setError(new AppError(AppErrorCode.FETCH_FAILED));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPracticeData();
  }, [id, t]);

  const renderQuiz = () => {
    if (!quizData) return null;

    switch (quizData.type) {
      case TaskType.CodeCompletion:
        return <CodeCompletionWidget data={quizData} />;

      case TaskType.SingleChoice:
        return <SingleChoiceQuiz data={quizData} />;

      case TaskType.AsyncSorter:
        return <AsyncSorterWidget data={quizData} />;

      default:
        return <p>{t('errors.unknownQuizType')}</p>;
    }
  };

  if (loading) {
    return (
      <Layout>
        <Container maxWidth="md" disableGutters={true}>
          <QuizSkeleton />
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container maxWidth="md" disableGutters={true}>
          <ErrorNotification message={t(`errors.${error.code}`, error.params)} />
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
            {t('backToLibrary')}
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
