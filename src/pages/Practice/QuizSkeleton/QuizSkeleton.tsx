import { Skeleton } from '@mui/material';

import styles from './QuizSkeleton.module.scss';

function QuizSkeleton() {
  return (
    <div>
      <Skeleton variant="rounded" sx={{ width: '135px', height: '36.5px' }} />
      <div className={styles.quizContainer}>
        <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      </div>
      <Skeleton variant="rounded" sx={{ height: '50dvh' }} />
    </div>
  );
}

export default QuizSkeleton;
