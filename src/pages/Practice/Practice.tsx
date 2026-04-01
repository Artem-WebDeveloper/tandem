import { lazy, useEffect, useState } from 'react';
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
import { AppError, AppErrorCode } from '@/core/errors/errors';
import type { QuizResults, UserAnswerPayload } from '@/core/api/submitQuizAnswers';

const AsyncSorterWidget = lazy(() => import('@/core/feature/AsyncSorterWidget/AsyncSorterWidget'));
const CodeCompletionWidget = lazy(
  () => import('@/core/feature/CodeCompletionWidget/CodeCompletionWidget'),
);
const CodeOrderingWidget = lazy(
  () => import('@/core/feature/CodeOrderingWidget/CodeOrderingWidget'),
);
const SingleChoiceQuiz = lazy(() => import('@/core/feature/SingleChoiceWidget/SingleChoiceQuiz'));
const TrueFalseWidget = lazy(() => import('@/core/feature/TrueFalseWidget/TrueFalseWidget'));

const Results = lazy(() => import('@/pages/Results/Results'));

const ErrorNotification = lazy(
  () => import('@/core/components/ErrorNotification/ErrorNotification'),
);

export default function Practice() {
  const theme = useTheme();
  const { t } = useTranslation('practice');
  const { id } = useParams<{ id: string }>();

  const [quizData, setQuizData] = useState<QuizTask | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);
  const [quizResults, setQuizResults] = useState<QuizResults<UserAnswerPayload> | null>(null);

  useEffect(() => {
    const fetchPracticeData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (id === undefined) {
          throw new AppError(AppErrorCode.MISSING_QUIZ_ID);
        }

        const quizData = await fetchQuizById(Number(id));

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

    setQuizResults(null);
    fetchPracticeData();
  }, [id]);

  const renderQuiz = () => {
    if (!quizData) return null;

    switch (quizData.type) {
      case TaskType.CodeCompletion:
        return <CodeCompletionWidget data={quizData} onSubmit={setQuizResults} />;

      case TaskType.SingleChoice:
        return <SingleChoiceQuiz data={quizData} onSubmit={setQuizResults} />;

      case TaskType.AsyncSorter:
        return <AsyncSorterWidget data={quizData} onSubmit={setQuizResults} />;

      case TaskType.CodeOrdering:
        return <CodeOrderingWidget data={quizData} onSubmit={setQuizResults} />;

      case TaskType.TrueFalse:
        return <TrueFalseWidget data={quizData} onSubmit={setQuizResults} />;

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

  if (quizResults) {
    return <Results quizResults={quizResults} onRetry={() => setQuizResults(null)} />;
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
