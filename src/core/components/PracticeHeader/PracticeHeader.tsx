import { grey } from '@mui/material/colors';

import styles from './PracticeHeader.module.scss';

import { mapQuizDifficulty } from '../../utils/mapQuizDifficulty';
import type { QuizData } from '../../api/fetchQuizById';
import DifficultyChip from '../DifficultyChip/DifficultyChip';
import TagChip from '../TagChip/TagChip';

function PracticeHeader({ data }: { data: QuizData }) {
  return (
    <div className={styles.header} style={{ borderColor: grey[500] }}>
      <div className={styles.headerLine}>
        <h2>{data.section}</h2>

        <DifficultyChip difficulty={data.difficulty}>
          {mapQuizDifficulty(data.difficulty)}
        </DifficultyChip>
      </div>

      <div className={styles.headerLine}>
        <p style={{ color: grey[500] }}>{data.type}</p>

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
