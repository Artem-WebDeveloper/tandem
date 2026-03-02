import { useTheme, Skeleton } from '@mui/material';
import styles from './CardSkeleton.module.scss';

export default function CardSkeleton() {
  const theme = useTheme();
  return (
    <li
      style={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
      }}
      className={styles.card}
    >
      <header className={styles.cardHeading}>
        <Skeleton variant="text" width="100%" height={40} />
      </header>
      <main className={styles.cardBody}>
        <section className={styles.cardDescription}></section>
        <Skeleton
          animation="wave"
          variant="rounded"
          width="100%"
          height={12}
          sx={{ marginBottom: '7px' }}
        />
        <Skeleton animation="wave" variant="rounded" width="90%" height={12} />
        <section
          className={styles.cardInfo}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <Skeleton variant="text" width={80} height={30} />
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="rounded" width={62} height={24} sx={{ borderRadius: '14px' }} />
        </section>

        <section className={styles.cardTags}>
          <Skeleton variant="rounded" width={60} height={20} sx={{ borderRadius: '20px' }} />
          <Skeleton variant="rounded" width={60} height={20} sx={{ borderRadius: '20px' }} />
          <Skeleton variant="rounded" width={60} height={20} sx={{ borderRadius: '20px' }} />
        </section>
      </main>
      <footer className={styles.cardFooter}>
        <div style={{ display: 'flex', width: '30%', justifyContent: 'center' }}>
          <Skeleton variant="text" width="80%" height={30} />
        </div>
        <Skeleton animation="wave" variant="rounded" width="70%" height={33} />
      </footer>
    </li>
  );
}
