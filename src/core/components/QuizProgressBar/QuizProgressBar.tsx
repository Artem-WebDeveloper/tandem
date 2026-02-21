import { LinearProgress, useTheme } from '@mui/material';

import styles from './QuizProgressBar.module.scss';

function QuizProgressBar({
  currentQuestionNumber,
  questionsCount,
}: {
  currentQuestionNumber: number;
  questionsCount: number;
}) {
  const theme = useTheme();
  const normalizedProgress = (currentQuestionNumber / questionsCount) * 100;

  return (
    <div>
      <div className={styles.progressInfo}>
        <p className={styles.questionNumber}>
          Вопрос {currentQuestionNumber} из {questionsCount}
        </p>
        <p>{normalizedProgress.toFixed(0)}%</p>
      </div>
      <div className={styles.progressBar}>
        <LinearProgress
          sx={{
            backgroundColor: theme.palette.grey[500],
            height: '8px',
            borderRadius: '4px',
            '& .MuiLinearProgress-bar': {
              borderRadius: '4px',
              backgroundColor: theme.palette.grey[800],
            },
          }}
          variant="determinate"
          value={normalizedProgress}
        />
      </div>
    </div>
  );
}

export default QuizProgressBar;
