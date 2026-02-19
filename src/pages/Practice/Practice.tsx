import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Practice.module.scss';
import Header from '../../core/components/Header/Header';
import Footer from '../../core/components/Footer/Footer';

const URL_PRACTICE = `/api/.......`; // ПОМЕНЯТЬ НА АКТУАЛЬНЫЙ
type PracticeData = { type: 'multiple_choice' | 'true_false' }; // ТОЛЬКО ДЛЯ ДЕМОНСТРАЦИИ

export default function Practice() {
  const { id } = useParams<{ id: string }>();

  const [practiceData, setPracticeData] = useState<PracticeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPracticeData = async () => {
      try {
        const response = await fetch(`${URL_PRACTICE}${id}`);

        if (!response.ok) {
          throw new Error('Ошибка сети');
        }

        const data = await response.json();
        setPracticeData(data);
        setLoading(false);
      } catch {
        setError('Ошибка загрузки квиза');
      } finally {
        setLoading(false);
      }
    };

    fetchPracticeData();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        {/* СДЕЛАТЬ ЛОАДЕР */}
        <p>Загрузка квиза...</p>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <p>{error}</p>
        <Footer />
      </>
    );
  }

  // СЮДА ДОБАВЛЯЕМ ВСЕ КОМПОНЕНТЫ РАЗРАБОТАННЫХ КВИЗОВ, имена для демонстрации
  const PRACTICE_COMPONENT = {
    multiple_choice: <p>Компонент Викторина</p>, // пример - <MultipleChoiceQuiz data={practiceData} />,
    true_false: <p>Компонент True/False</p>, // пример - <TrueFalseQuiz data={practiceData} />,
  };

  const quizComponent = (practiceData && PRACTICE_COMPONENT[practiceData.type]) || (
    <p>Неизвестный тип квиза</p>
  );

  return (
    <>
      <Header />
      <h2 className={styles.title}>Practice</h2>
      {quizComponent}
      <Footer />
    </>
  );
}
