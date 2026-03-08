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

interface SingleChoiceQuizProps {
  data: SingleChoiceTaskResponse;
}

export default function SingleChoiceQuiz({ data }: SingleChoiceQuizProps) {
  const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  const currentQuestion = data.questions[currentIndex];
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
      setSelectedOptionId(null);
    } else {
      console.log('Answers:', userAnswers);
    }
  };

  const goBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      // restore preview answer
      const prevAnswer = userAnswers[currentIndex - 1];
      setSelectedOptionId(prevAnswer ? String(prevAnswer.payload) : null);
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

  return (
    <div>
      <QuizProgressBar
        currentQuestionNumber={currentIndex + 1}
        questionsCount={data.questions.length}
      />

      <Typography
        variant="h3"
        sx={{
          mb: 3,
          fontSize: { xs: '1rem', sm: '1.25rem' },
        }}
      >
        {currentQuestion.text}
      </Typography>

      <FormControl component="fieldset" sx={{ width: '100%' }}>
        <RadioGroup
          value={selectedOptionId ?? ''}
          onChange={(e) => setSelectedOptionId(e.target.value)}
        >
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;

            return (
              <FormControlLabel
                key={option.id}
                value={option.id}
                control={
                  <Radio
                    sx={{
                      color: theme.palette.text.primary,
                      '&.Mui-checked': {
                        color: '#ffffff',
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 500,
                      color: isSelected ? '#ffffff' : theme.palette.text.primary,
                    }}
                  >
                    {option.text}
                  </Typography>
                }
                sx={{
                  width: '100%',
                  margin: '10px 0',
                  padding: '10px 15px',
                  borderRadius: '10px',
                  cursor: 'pointer',

                  border: `1px solid ${theme.palette.divider}`,

                  backgroundColor: isSelected
                    ? theme.palette.secondary.main
                    : theme.palette.background.paper,

                  transform: isSelected ? 'scale(1.005)' : 'scale(1)',
                  transition: 'all 0.3s ease',

                  '&:hover': {
                    backgroundColor: isSelected
                      ? theme.palette.secondary.main
                      : theme.palette.backgroundAccent,

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
