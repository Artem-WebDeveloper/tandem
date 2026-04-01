import { Link } from 'react-router-dom';
import styles from './CommonStatisticBlock.module.scss';
import { useTranslation } from 'react-i18next';
import StarIcon from '@mui/icons-material/Star';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ReplayIcon from '@mui/icons-material/Replay';
import Tile from './Tile/Tile';
import type { CommonStatistic } from '../types';

export default function CommonStatisticBlock({
  data,
  isLoading,
}: {
  data: CommonStatistic | null;
  isLoading: boolean;
}) {
  const { t } = useTranslation('dashboard');

  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link className={styles.listLink} to={`/library`}>
          <Tile
            title={t('dashboard.statistics.availableTask.title')}
            icon={<StarIcon color="warning" />}
            color="warning"
            count={data?.testsCount ?? null}
            description={t('dashboard.statistics.availableTask.description')}
            isLoading={isLoading}
          />
        </Link>
      </li>

      <li className={styles.listItem}>
        <Link className={styles.listLink} to={`/library?page=1&is_perfect=true`}>
          <Tile
            title={t('dashboard.statistics.completedTask.title')}
            icon={<SportsScoreIcon color="success" />}
            color="success"
            description={t('dashboard.statistics.completedTask.description')}
            count={data?.completedTests ?? null}
            isLoading={isLoading}
          />
        </Link>
      </li>

      <li className={styles.listItem}>
        <Link className={styles.listLink} to={`/library?page=1&is_perfect=false`}>
          <Tile
            title={t('dashboard.statistics.remainingTest.title')}
            icon={<ScheduleIcon color="info" />}
            color="info"
            description={t('dashboard.statistics.remainingTest.description')}
            count={data?.remainTests ?? null}
            isLoading={isLoading}
          />
        </Link>
      </li>

      <li className={styles.listItem}>
        <Tile
          title={t('dashboard.statistics.totalAttempts.title')}
          icon={<ReplayIcon color="error" />}
          color="error"
          description={t('dashboard.statistics.totalAttempts.description')}
          count={data?.totalAttempts ?? null}
          isLoading={isLoading}
        />
      </li>
    </ul>
  );
}
