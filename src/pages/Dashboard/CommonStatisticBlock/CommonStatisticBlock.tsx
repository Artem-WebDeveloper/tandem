import StarIcon from '@mui/icons-material/Star';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ReplayIcon from '@mui/icons-material/Replay';
import styles from './CommonStatisticBlock.module.scss';
import Tile from './Tile/Tile';
import { useTranslation } from 'react-i18next';
import { COMMON_DATA } from '@/core/mock/dashboard';

export default function CommonStatisticBlock() {
  const { t } = useTranslation('dashboard');
  const testsCount = COMMON_DATA.testsCount;
  const completedTests = COMMON_DATA.completedTests;
  const remainTests = testsCount - completedTests;
  const totalAttempts = COMMON_DATA.totalAttempts;

  return (
    <div className={styles.wrapper}>
      <Tile
        title={t('dashboard.statistics.availableTask.title')}
        icon={<StarIcon color="warning" />}
        color="warning"
        count={testsCount}
        description={t('dashboard.statistics.availableTask.description')}
      />

      <Tile
        title={t('dashboard.statistics.completedTask.title')}
        icon={<SportsScoreIcon color="success" />}
        color="success"
        count={completedTests}
        description={t('dashboard.statistics.completedTask.description')}
      />

      <Tile
        title={t('dashboard.statistics.remainingTest.title')}
        icon={<ScheduleIcon color="info" />}
        color="info"
        count={remainTests}
        description={t('dashboard.statistics.remainingTest.description')}
      />

      <Tile
        title={t('dashboard.statistics.totalAttempts.title')}
        icon={<ReplayIcon color="error" />}
        color="error"
        count={totalAttempts}
        description={t('dashboard.statistics.totalAttempts.description')}
      />
    </div>
  );
}
