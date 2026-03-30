import styles from './CategorySkeleton.module.scss';
import { Skeleton } from '@mui/material';

const LINES_COUNT = 5;

function CategorySkeleton() {
  return (
    <div className={styles.container}>
      {Array.from({ length: LINES_COUNT }).map((_, index) => (
        <div className={styles.line} key={index}>
          <div className={styles.text}>
            <Skeleton variant="rounded" sx={{ width: '100px' }} />
            <Skeleton variant="rounded" sx={{ width: '50px' }} />
          </div>
          <Skeleton variant="rounded" />
        </div>
      ))}
    </div>
  );
}

export default CategorySkeleton;
