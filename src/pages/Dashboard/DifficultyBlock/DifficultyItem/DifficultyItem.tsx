import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import { Liquid } from '@ant-design/plots';
import styles from './DifficultyItem.module.scss';
import type { DifficultyStatistic } from '../../types';
import { difficultyLabels } from '@/core/configs/library.config';
import { useThemeStore } from '@/core/store/theme.store';
import DifficultyChip from '@/core/components/DifficultyChip/DifficultyChip';

export default function DifficultyItem({ item }: { item: DifficultyStatistic }) {
  const { t } = useTranslation('dashboard');
  const mode = useThemeStore((state) => state.mode);

  const theme = useTheme();
  const color =
    item.difficulty === 1
      ? theme.palette.success
      : item.difficulty === 2
        ? theme.palette.warning
        : theme.palette.error;

  const percentage = Number.parseFloat((item.completedTestsCount / item.tests).toPrecision(2));

  const config = {
    percent: percentage,
    title: false,
    style: {
      outlineBorder: 2,
      outlineDistance: 4,
      fill: mode === 'light' ? color.light : color.dark,
      stroke: color.main,
      contentFill: mode === 'light' ? color.dark : color.light,
      contentFontSize: 20,
      waveLength: 100,
    },
    height: 160,
    width: 160,
    interaction: { tooltip: false },
  };

  return (
    <li title={difficultyLabels[item.difficulty]}>
      <Link to={`/library?difficulty=${item.difficulty}`} className={styles.difficulty_item}>
        <DifficultyChip difficulty={item.difficulty}>
          {difficultyLabels[item.difficulty]}
        </DifficultyChip>

        <Liquid {...config} className={styles.chart} />

        <p style={{ color: theme.palette.text.secondary, fontSize: '14px' }}>
          {t('dashboard.difficulty.completed')} {item.completedTestsCount}/{item.tests}
        </p>
      </Link>
    </li>
  );
}
