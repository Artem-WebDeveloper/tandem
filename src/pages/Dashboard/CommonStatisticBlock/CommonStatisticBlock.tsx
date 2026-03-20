import StarIcon from '@mui/icons-material/Star';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ReplayIcon from '@mui/icons-material/Replay';
import styles from './CommonStatisticBlock.module.scss';
import Tile from './Tile/Tile';
import { useTranslation } from 'react-i18next';
import { COMMON_DATA } from '@/core/mock/dashboard';

const TILES_DATA: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'success' | 'warning' | 'error' | 'info';
  count: number;
  // fetchData: () => Promise<number>;
}[] = [
  {
    title: 'Доступно тестов',
    description: 'Всего доступно для обучения',
    icon: <StarIcon color="warning" />,
    color: 'warning',
    count: COMMON_DATA.testsCount,
  },
  {
    title: 'Завершено тестов',
    description: 'Количество завершенных тестов',
    icon: <SportsScoreIcon color="success" />,
    color: 'success',
    count: COMMON_DATA.completedTests,
  },
  {
    title: 'Осталось завершить',
    description: 'Количество тестов, которые еще не завершены',
    icon: <ScheduleIcon color="info" />,
    color: 'info',
    count: COMMON_DATA.remainTests,
  },
  {
    title: 'Всего попыток',
    description: 'Количество попыток в процессе обучения',
    icon: <ReplayIcon color="error" />,
    color: 'error',
    count: COMMON_DATA.totalAttempts,
  },
];

export default function CommonStatisticBlock() {
  const { t } = useTranslation('dashboard');
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
