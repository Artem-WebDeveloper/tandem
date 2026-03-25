import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import styles from './CodeOrderingQuizBody.module.scss';

import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import type { CodeOrderingQuestion } from '../types';
import CodeOrderingDragAndDrop from './CodeOrderingDragAndDrop/CodeOrderingDragAndDrop';
import { useLocale } from '@/core/i18n/useLocal';

export default function CodeOrderingQuizBody({ questions }: { questions: CodeOrderingQuestion[] }) {
  const locale = useLocale();
  const { t } = useTranslation('practice');

  const currentQuestionNumber = useCodeOrderingStore((state) => state.currentQuestionNumber);
  const { id, text, codeLines } = questions[currentQuestionNumber];

  return (
    <div className={styles.quizBody}>
      <Typography variant="h3">{t('codeOrdering.instruction')}</Typography>
      <Typography variant="body2">{text[locale]}</Typography>
      <CodeOrderingDragAndDrop codeLines={codeLines} currentQuestionId={id} />
    </div>
  );
}
