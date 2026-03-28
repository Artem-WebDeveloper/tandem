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

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
    >
      <Typography variant="h3">{t('dashboard.difficulty.title')}</Typography>

      {isLoading || data === null ? (
        <DifficultySkeleton />
      ) : (
        <ul className={styles.difficulty_list}>
          {data.map((item, index) => (
            <DifficultyItem key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
