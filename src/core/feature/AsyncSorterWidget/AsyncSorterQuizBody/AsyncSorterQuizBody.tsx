import { useTheme } from '@mui/material';
import { Typography } from '@mui/material';

import styles from './AsyncSorterQuizBody.module.scss';

import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import type { AsyncSorterQuestion } from '../types';
import AsyncSorterDragAndDrop from './AsyncSorterDragAndDrop/AsyncSorterDragAndDrop';

function AsyncSorterQuizBody({ questions }: { questions: AsyncSorterQuestion[] }) {
  const theme = useTheme();
  const currentQuestionNumber = useAsyncSorterStore((state) => state.currentQuestionNumber);

  const { id, code, blocks } = questions[currentQuestionNumber];

  return (
    <div className={styles.quizBody}>
      <Typography variant="h3">Расставьте цифры в порядке их вывода в консоль</Typography>

      <pre
        className={styles.code}
        style={{
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.divider,
          boxShadow: theme.shadows[1],
        }}
      >
        {code}
      </pre>

      <AsyncSorterDragAndDrop blocks={blocks} currentQuestionId={id} />
    </div>
  );
}

export default AsyncSorterQuizBody;
