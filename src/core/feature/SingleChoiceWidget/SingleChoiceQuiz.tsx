import { useState } from 'react';

import {
  Typography,
  useTheme,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';

import type { SingleChoiceTaskResponse } from './types';
import type { UserAnswer } from '@/core/types/quiz';

import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';

import styles from './singleChoiceQuiz.module.scss';

interface SingleChoiceQuizProps {
  data: SingleChoiceTaskResponse;
}

export default function SingleChoiceQuiz({ data }: SingleChoiceQuizProps) {
  const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const currentQuestion = data.questions[currentIndex];

  const currentAnswer = userAnswers[currentIndex];
  const selectedOptionId = currentAnswer ? String(currentAnswer.payload) : null;

  if (!currentQuestion) {
    return <p>В этом тесте пока нет вопросов.</p>;
  }

  const isLastQuestion = currentIndex === data.questions.length - 1;

  const goNext = () => {
    if (selectedOptionId === null) return;

    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = {
        questionId: currentQuestion.id,
        payload: selectedOptionId,
      };
      return updated;
    });

    if (!isLastQuestion) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      console.log('Answers:', userAnswers);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    if (selectedOptionId === null) return;

    const finalAnswers = [
      ...userAnswers,
      {
        questionId: currentQuestion.id,
        payload: selectedOptionId,
      },
    ];

    console.log('Submit answers:', finalAnswers);
    // send to backend
  };

  const handleOptionChange = (optionId: string) => {
    setUserAnswers((prev) => {
      const updated = [...prev];
      updated[currentIndex] = {
        questionId: currentQuestion.id,
        payload: optionId,
      };
      return updated;
    });
  };

  return (
    <div>
      <QuizProgressBar
        currentQuestionNumber={currentIndex + 1}
        questionsCount={data.questions.length}
      />

      <Typography
        variant="h3"
        sx={{
          mt: -3,
          mb: 2,
          fontSize: { xs: '1rem', sm: '1.25rem' },
        }}
      >
        {currentQuestion.text}
      </Typography>

      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <RadioGroup
          value={selectedOptionId ?? ''}
          onChange={(e) => handleOptionChange(e.target.value)}
        >
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <FormControlLabel
                className={styles.option}
                key={option.id}
                value={option.id}
                control={
                  <Radio
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 500,
                    }}
                  >
                    {option.text}
                  </Typography>
                }
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  transform: isSelected ? 'scale(1.005)' : 'scale(1)',
                  transition: 'all 0.3s ease',

                  '&:hover': {
                    backgroundColor: theme.palette.backgroundAccent,
                    borderColor: theme.palette.info.main,
                  },
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>

      <QuizNavigation
        currentQuestionNumber={currentIndex}
        increaseQuestionNumber={goNext}
        decreaseQuestionNumber={goBack}
        questionsCount={data.questions.length}
        isAnswerGiven={selectedOptionId !== null}
        onAnswersSubmit={handleSubmit}
      />
    </div>
  );
}
