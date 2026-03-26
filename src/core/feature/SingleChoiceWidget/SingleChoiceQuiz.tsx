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
import type {
  SingleChoiceUserAnswerPayload,
  QuizAnswer,
  QuizResults,
  UserAnswerPayload,
} from '@/core/api/submitQuizAnswers';

import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';

import styles from './singleChoiceQuiz.module.scss';
import { useTranslation } from 'react-i18next';
import { useLocale } from '@/core/i18n/useLocal';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';

interface SingleChoiceQuizProps {
  data: SingleChoiceTaskResponse;
  onSubmit?: <T extends UserAnswerPayload>(quizResults: QuizResults<T>) => void;
}

export default function SingleChoiceQuiz({ data, onSubmit }: SingleChoiceQuizProps) {
  const theme = useTheme();

  const { t } = useTranslation('practice');
  const locale = useLocale();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const currentQuestion = data.questions[currentIndex];

  if (!currentQuestion) {
    return <p>{t(`errors.noQuestionInTest`)}</p>;
  }

  const currentAnswer = userAnswers[currentIndex];
  const selectedOptionId = currentAnswer ? String(currentAnswer.payload) : null;

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

  const goNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const goBack = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const answersForApi = userAnswers.map((answer) => ({
      question_id: answer.questionId,
      answer: answer.payload,
    }));

    const quizResults = await submitQuizAnswers(
      data.id,
      answersForApi as QuizAnswer<SingleChoiceUserAnswerPayload>[],
    );
    if (onSubmit) onSubmit(quizResults);
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
          mb: 1.2,
          fontSize: { xs: '1rem', sm: '1.25rem' },
        }}
      >
        {currentQuestion.text[locale]}
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
                    {option.text[locale]}
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
