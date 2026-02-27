import { useState } from 'react';

import type { SingleChoiceTaskResponse } from './types';
import type { UserAnswer } from '@/core/types/quiz';

import styles from './SingleChoiceQuiz.module.scss';

interface SingleChoiceQuizProps {
  data: SingleChoiceTaskResponse;
}

export default function SingleChoiceQuiz({ data }: SingleChoiceQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const currentQuestion = data.questions[currentIndex];
  const isLastQuestion = currentIndex === data.questions.length - 1;

  const goNext = () => {
    if (selectedOptionId === null) return;

    setUserAnswers([
      ...userAnswers,
      {
        questionId: currentQuestion.id,
        payload: selectedOptionId,
      },
    ]);

    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
    } else {
      // submit to server
      console.log('Answers:', userAnswers);
    }
  };

  return (
    <div className={styles.singleChoice}>
      <p className={styles.singleChoice__title}>
        Question {currentIndex + 1} of {data.questions.length}
      </p>

      <h3 className={styles.singleChoice__question}>{currentQuestion.text}</h3>

      <ul className={styles.singleChoice__list}>
        {currentQuestion.options.map((option) => (
          <li
            key={option.id}
            className={`${styles.singleChoice__item} ${selectedOptionId === option.id ? styles.singleChoice__item_selected : ''}`}
            onClick={() => setSelectedOptionId(option.id)}
          >
            {option.text}
          </li>
        ))}
      </ul>

      <div className={styles.singleChoice__btnWrapper}>
        <button
          className={styles.singleChoice__btn}
          disabled={selectedOptionId === null}
          onClick={goNext}
        >
          {isLastQuestion ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}
