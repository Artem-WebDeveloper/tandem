import { useEffect, useState, type JSX } from 'react';
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

  // СЮДА ДОБАВЛЯЕМ ВСЕ КОМПОНЕНТЫ РАЗРАБОТАННЫХ КВИЗОВ, имена для демонстрации
  const PRACTICE_COMPONENT: Record<string, JSX.Element> = {
    'Code Completion': <CodeCompletionWidget data={quizData!} />,
    multiple_choice: <p>Компонент Викторина</p>, // пример - <MultipleChoiceQuiz data={practiceData} />,
    true_false: <p>Компонент True/False</p>, // пример - <TrueFalseQuiz data={practiceData} />,
  };

  const quizComponent = (quizData && PRACTICE_COMPONENT[quizData.type]) || (
    <p>Неизвестный тип квиза</p>
  );

  return (
    quizData && (
      <Layout>
        <Container maxWidth="md">
          <LinkButton href="/library">
            <ArrowBackRoundedIcon sx={{ width: '16px', marginRight: '8px' }} />
            Назад в библиотеку
          </LinkButton>
          <div
            className={styles.quizContainer}
            style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
          >
            <PracticeHeader data={quizData} />
            {quizComponent}
          </div>
        </Container>
      </Layout>
    )
  );
}
