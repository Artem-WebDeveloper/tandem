import { Skeleton, useTheme, Container } from '@mui/material';
import styles from './ResultsSkeleton.module.scss';
import Layout from '@/core/components/Layout/Layout';

export default function ResultsSkeleton() {
  const theme = useTheme();

  return (
    <Layout>
      <Container maxWidth="md" disableGutters={true}>
        <Skeleton variant="rounded" sx={{ height: '36px', width: '180px' }} />
        <div
          className={styles.resultsContainer}
          style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
        >
          <Skeleton variant="rounded" sx={{ fontSize: '26px', width: '220px', margin: '0 auto' }} />
          <Skeleton variant="text" sx={{ fontSize: '20px', width: '80px', margin: '0 auto' }} />
          <Skeleton
            variant="text"
            sx={{ fontSize: '16px', width: '200px', margin: '0 auto', mb: 2 }}
          />

          <div className={styles.resultElementsContainer}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton variant="rounded" sx={{ width: '100%', height: '200px' }} key={index} />
            ))}
          </div>

          <div className={styles.navigation}>
            <Skeleton variant="rounded" height={30} sx={{ flexGrow: '1' }} />
            <Skeleton variant="rounded" height={30} sx={{ flexGrow: '1' }} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
