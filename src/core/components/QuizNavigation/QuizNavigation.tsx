import { useTranslation } from 'react-i18next';
import { Button, CircularProgress } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import styles from './QuizNavigation.module.scss';

import { useState } from 'react';

type QuizNavigationProps = {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  questionsCount: number;
  isAnswerGiven: boolean;
  onAnswersSubmit: () => Promise<void>;
  isBackAllowed?: boolean;
};

function QuizNavigation({
  currentQuestionNumber,
  increaseQuestionNumber,
  decreaseQuestionNumber,
  questionsCount,
  isAnswerGiven,
  onAnswersSubmit,
  isBackAllowed = true,
}: QuizNavigationProps) {
  const { t } = useTranslation('practice');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFirstQuestion = currentQuestionNumber <= 0;
  const isLastQuestion = currentQuestionNumber >= questionsCount - 1;

  function handleBack() {
    if (isFirstQuestion) return;

    decreaseQuestionNumber();
  }

  function handleNext() {
    if (isLastQuestion) return;

    increaseQuestionNumber();
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    await onAnswersSubmit();
    setIsSubmitting(false);
  }

  return (
    <div className={styles.navigation}>
      <Button
        variant="outlined"
        onClick={handleBack}
        disabled={isFirstQuestion || !isBackAllowed || isSubmitting}
      >
        {t('navigation.back')}
      </Button>

      {!isLastQuestion ? (
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isLastQuestion || !isAnswerGiven}
          sx={{ flexGrow: '1', lineHeight: '1.2' }}
          endIcon={<ArrowForwardRoundedIcon />}
        >
          {t('navigation.next')}
        </Button>
      ) : (
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ flexGrow: '1' }}
          disabled={!isAnswerGiven || isSubmitting}
        >
          {isSubmitting ? <CircularProgress color="inherit" size="24px" /> : t('navigation.submit')}
        </Button>
      )}
    </div>
  );
}

export default QuizNavigation;
