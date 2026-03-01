import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '@mui/material';
import { Typography } from '@mui/material';

import styles from './AsyncSorterQuizBody.module.scss';

import { useThemeStore } from '@/core/store/theme.store';
import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import type { AsyncSorterQuestion } from '../types';
import AsyncSorterDragAndDrop from './AsyncSorterDragAndDrop/AsyncSorterDragAndDrop';

function AsyncSorterQuizBody({ questions }: { questions: AsyncSorterQuestion[] }) {
  const appMode = useThemeStore((state) => state.mode);
  const theme = useTheme();

  const currentQuestionNumber = useAsyncSorterStore((state) => state.currentQuestionNumber);
  const { id, code, blocks } = questions[currentQuestionNumber];

  return (
    <div className={styles.quizBody}>
      <Typography variant="h3">Расставьте цифры в порядке их вывода на консоль</Typography>

      <SyntaxHighlighter
        language="javascript"
        style={appMode === 'light' ? docco : railscasts}
        customStyle={{
          borderRadius: '8px',
          padding: '16px',
          border: '1px solid',
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.divider,
          boxShadow: theme.shadows[1],
        }}
      >
        {code}
      </SyntaxHighlighter>

      <AsyncSorterDragAndDrop blocks={blocks} currentQuestionId={id} />
    </div>
  );
}

export default AsyncSorterQuizBody;
