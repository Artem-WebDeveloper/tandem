import styles from './DifficultyBlock.module.scss';
import { Typography, useTheme } from '@mui/material';
import { DIFFICULTY_DATA } from '@/core/mock/dashboard';
import DifficultyItem from './DifficultyItem/DifficultyItem';
import { useTranslation } from 'react-i18next';

export default function DifficultyBlock() {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();
  const difficultyData = DIFFICULTY_DATA;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
    >
      <Typography variant="h3">{t('dashboard.difficulty.title')}</Typography>
      <ul className={styles.difficulty_list}>
        {difficultyData.map((item, index) => (
          <DifficultyItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
