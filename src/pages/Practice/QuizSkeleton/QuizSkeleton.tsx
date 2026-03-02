import { Skeleton, useTheme } from '@mui/material';

import styles from './QuizSkeleton.module.scss';

function QuizSkeleton() {
  const theme = useTheme();

  return (
    <div>
      <Skeleton variant="rounded" sx={{ width: '135px', height: '36.5px' }} />
      <div
        className={styles.quizContainer}
        style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
      >
        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rounded" sx={{ height: '50dvh' }} />
      </div>
    </div>
  );
}

export default QuizSkeleton;
