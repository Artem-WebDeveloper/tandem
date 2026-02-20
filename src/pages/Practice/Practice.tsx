import { useEffect, useState, type JSX } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, Container } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { grey, red } from '@mui/material/colors';

import styles from './Practice.module.scss';

import { fetchQuizById, type QuizData } from '../../core/api/fetchQuizById';
import Layout from '../../core/components/Layout/Layout';
import QuizSkeleton from '../../core/components/QuizSkeleton/QuizSkeleton';
import PracticeHeader from '../../core/components/PracticeHeader/PracticeHeader';
import LinkButton from '../../core/components/LinkButton.tsx/LinkButton';

export default function Practice() {
  const { id } = useParams<{ id: string }>();

  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPracticeData = async () => {
      try {
        if (id === undefined) {
          throw new Error('No quiz id provided');
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
          <Alert severity="error" sx={{ color: red[900], backgroundColor: red[200] }}>
            {error}
          </Alert>
        </Container>
      </Layout>
    );
  }

  if (!quizData) {
    return (
      <Layout>
        <Container maxWidth="md">
          <Alert severity="error" sx={{ color: red[900], backgroundColor: red[200] }}>
            Unexpected error
          </Alert>
        </Container>
      </Layout>
    );
  }

  // СЮДА ДОБАВЛЯЕМ ВСЕ КОМПОНЕНТЫ РАЗРАБОТАННЫХ КВИЗОВ, имена для демонстрации
  const PRACTICE_COMPONENT: Record<string, JSX.Element> = {
    'Code Completion': <div style={{ height: '50dvh' }}>Code completion component</div>,
    multiple_choice: <p>Компонент Викторина</p>, // пример - <MultipleChoiceQuiz data={practiceData} />,
    true_false: <p>Компонент True/False</p>, // пример - <TrueFalseQuiz data={practiceData} />,
  };

  const quizComponent = PRACTICE_COMPONENT[quizData.type] || <p>Неизвестный тип квиза</p>;

  return (
    <Layout>
      <Container maxWidth="md">
        <LinkButton to="/library">
          <ArrowBackRoundedIcon sx={{ width: '16px', marginRight: '8px' }} />
          Back to library
        </LinkButton>
        <div className={styles.quizContainer} style={{ backgroundColor: grey[900] }}>
          <PracticeHeader data={quizData} />
          {quizComponent}
        </div>
      </Container>
    </Layout>
  );
}
