import { LinearProgress, Typography, useTheme } from '@mui/material';

import styles from './QuizProgressBar.module.scss';

function QuizProgressBar({
  currentQuestionNumber,
  questionsCount,
}: {
  currentQuestionNumber: number;
  questionsCount: number;
}) {
  const theme = useTheme();
  const normalizedProgress =
    questionsCount === 0 ? 0 : (currentQuestionNumber / questionsCount) * 100;

  return (
    <div>
      <div className={styles.progressInfo}>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontWeight: 700 }}>
          Вопрос {currentQuestionNumber} из {questionsCount}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.textLight }}>
          {normalizedProgress.toFixed(0)}%
        </Typography>
      </div>
      <div className={styles.progressBar}>
        <LinearProgress
          sx={{
            backgroundColor: theme.palette.divider,
            height: '8px',
            borderRadius: '4px',
            '& .MuiLinearProgress-bar': {
              borderRadius: '4px',
              backgroundColor: theme.palette.primary.main,
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
