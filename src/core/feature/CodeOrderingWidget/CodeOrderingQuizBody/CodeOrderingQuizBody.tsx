import { Typography } from '@mui/material';

import styles from './CodeOrderingQuizBody.module.scss';

import { LOCALE } from '@/core/configs/locale.config';
import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import type { CodeOrderingQuestion } from '../types';
import CodeOrderingDragAndDrop from './CodeOrderingDragAndDrop/CodeOrderingDragAndDrop';

export default function CodeOrderingQuizBody({ questions }: { questions: CodeOrderingQuestion[] }) {
  const currentQuestionNumber = useCodeOrderingStore((state) => state.currentQuestionNumber);
  const { id, text, codeLines } = questions[currentQuestionNumber];

  return (
    <div className={styles.quizBody}>
      <Typography variant="h3">Расставьте строки в правильном порядке</Typography>
      <Typography variant="body2">{text[LOCALE]}</Typography>
      <CodeOrderingDragAndDrop codeLines={codeLines} currentQuestionId={id} />
    </div>
  );
}
