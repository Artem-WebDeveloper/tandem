import styles from './DifficultyItem.module.scss';
import { Liquid } from '@ant-design/plots';
import { useTheme } from '@mui/material';
import type { DifficultyCategory } from '../../types';
import { useThemeStore } from '@/core/store/theme.store';
import { Difficulty } from '@/core/types/quiz';
import DifficultyChip from '@/core/components/DifficultyChip/DifficultyChip';

export default function DifficultyItem({ item }: { item: DifficultyCategory }) {
  const mode = useThemeStore((state) => state.mode);

  const theme = useTheme();
  const color =
    item.difficulty === 'Easy'
      ? theme.palette.success
      : item.difficulty === 'Medium'
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
    <li className={styles.difficulty_item} title={item.difficulty}>
      <DifficultyChip difficulty={Difficulty[item.difficulty]}>{item.difficulty}</DifficultyChip>
      <Liquid {...config} className={styles.chart} />
    </li>
  );
}
