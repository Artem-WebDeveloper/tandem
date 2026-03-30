import styles from './DifficultyBlock.module.scss';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import type { DifficultyStatistic } from '../types';
import DifficultyItem from './DifficultyItem/DifficultyItem';
import DifficultySkeleton from './DifficultySkeleton/DifficultySkeleton';

export default function DifficultyBlock({
  data,
  isLoading,
}: {
  data: DifficultyStatistic[] | null;
  isLoading: boolean;
}) {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

  const easyItem = data?.find((item) => item.difficulty === 1);
  const mediumItem = data?.find((item) => item.difficulty === 2);
  const hardItem = data?.find((item) => item.difficulty === 3);

  const isData = easyItem !== undefined && mediumItem !== undefined && hardItem !== undefined;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
    >
      <Typography variant="h3">{t('dashboard.difficulty.title')}</Typography>

      {isLoading || !isData ? (
        <DifficultySkeleton />
      ) : (
        <ul className={styles.difficulty_list}>
          <DifficultyItem item={easyItem} />
          <DifficultyItem item={mediumItem} />
          <DifficultyItem item={hardItem} />
        </ul>
      )}
    </div>
  );
}
