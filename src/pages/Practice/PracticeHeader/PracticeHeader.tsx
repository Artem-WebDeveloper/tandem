import styles from './PracticeHeader.module.scss';

import type { QuizTask } from '@/core/types/quiz';
import DifficultyChip from '@/core/components/DifficultyChip/DifficultyChip';
import { Chip, Typography, useTheme } from '@mui/material';

import { getTaskTypeLabel } from '@/core/utils/getTaskTypeLabel';
import { LOCALE } from '@/core/configs/locale.config';

const difficultyLabels = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
} as const;

function PracticeHeader({ data }: { data: QuizTask }) {
  const theme = useTheme();

  const difficultyLabel = difficultyLabels[data.difficulty] || 'Unknown';

  const typeLabel = getTaskTypeLabel(data.type);

  return (
    <div className={styles.header} style={{ borderColor: theme.palette.divider }}>
      <div className={styles.headerLine}>
        <Typography variant="h2">{data.title[LOCALE]}</Typography>

        <DifficultyChip difficulty={data.difficulty}>{difficultyLabel}</DifficultyChip>
      </div>

      <div className={styles.headerLineWrap}>
        <Chip variant="outlined" label={typeLabel} size="small" />

        <div className={styles.tags}>
          {data.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PracticeHeader;
