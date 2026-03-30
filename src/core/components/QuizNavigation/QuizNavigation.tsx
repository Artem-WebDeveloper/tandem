// import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import styles from './QuizNavigation.module.scss';

import { useTranslation } from 'react-i18next';

function QuizNavigation({
  currentQuestionNumber,
  increaseQuestionNumber,
  decreaseQuestionNumber,
  questionsCount,
  isAnswerGiven,
  onAnswersSubmit,
  isBackAllowed = true,
}: {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  questionsCount: number;
  isAnswerGiven: boolean;
  onAnswersSubmit: () => Promise<void>;
  isBackAllowed?: boolean;
}) {
  // const navigate = useNavigate();

  const isFirstQuestion = currentQuestionNumber <= 0;
  const isLastQuestion = currentQuestionNumber >= questionsCount - 1;

  const { t } = useTranslation('practice');

  function handleBack() {
    if (isFirstQuestion) return;

    decreaseQuestionNumber();
  }

  function handleNext() {
    if (isLastQuestion) return;

    increaseQuestionNumber();
  }

  async function handleSubmit() {
    await onAnswersSubmit();

    // Заменить потом если будет страница результаты
    // navigate('/dashboard');
  }

  return (
    <div className={styles.navigation}>
      <Button variant="outlined" onClick={handleBack} disabled={isFirstQuestion || !isBackAllowed}>
        {t('navigation.back')}
      </Button>

      {!isLastQuestion ? (
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isLastQuestion || !isAnswerGiven}
          sx={{ flexGrow: '1', lineHeight: '1.2' }}
        >
          {t('navigation.next')}
          <ArrowForwardRoundedIcon sx={{ width: 18, height: 18, marginLeft: '5px' }} />
        </Button>
      ) : (
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ flexGrow: '1' }}
          disabled={!isAnswerGiven}
        >
          {t('navigation.submit')}
        </Button>
      )}
    </div>
  );
}

export default QuizNavigation;
