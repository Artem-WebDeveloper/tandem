import styles from './PracticeHeader.module.scss';

import { mapQuizDifficulty } from '../../../core/utils/mapQuizDifficulty';
import type { QuizData } from '../../../core/api/fetchQuizById';
import DifficultyChip from '../../../core/components/DifficultyChip/DifficultyChip';
import TagChip from '../../../core/components/TagChip/TagChip';
import { useTheme } from '@mui/material';

function PracticeHeader({ data }: { data: QuizData }) {
  const theme = useTheme();

  return (
    <div className={styles.header} style={{ borderColor: theme.palette.grey[500] }}>
      <div className={styles.headerLine}>
        <h2>{data.section}</h2>

        <DifficultyChip difficulty={data.difficulty}>
          {mapQuizDifficulty(data.difficulty)}
        </DifficultyChip>
      </div>

      <div className={styles.headerLine}>
        <p style={{ color: theme.palette.grey[500] }}>{data.type}</p>

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
