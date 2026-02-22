import styles from './PracticeHeader.module.scss';

import { mapQuizDifficulty } from '../../../core/utils/mapQuizDifficulty';
import type { QuizData } from '../../../core/api/fetchQuizById';
import DifficultyChip from '../../../core/components/DifficultyChip/DifficultyChip';
import TagChip from '../../../core/components/TagChip/TagChip';
import { Typography, useTheme } from '@mui/material';

function PracticeHeader({ data }: { data: QuizData }) {
  const theme = useTheme();

  return (
    <div className={styles.header} style={{ borderColor: theme.palette.divider }}>
      <div className={styles.headerLine}>
        <Typography variant="h2">{data.section}</Typography>

        <DifficultyChip difficulty={data.difficulty}>
          {mapQuizDifficulty(data.difficulty)}
        </DifficultyChip>
      </div>

      <div className={styles.headerLine}>
        <Typography variant="body2" style={{ color: theme.palette.text.secondary }}>
          {data.type}
        </Typography>

        <div className={styles.tags}>
          {data.tags.map((tag) => (
            <TagChip key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PracticeHeader;
