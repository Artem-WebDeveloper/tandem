import { Typography, useTheme } from '@mui/material';
import type { CodeCompletionQuestion } from '../types';
import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import CodeCompletionAnswerInput from './CodeCompletionAnswerInput/CodeCompletionAnswerInput';

import styles from './CodeCompletionQuizBody.module.scss';

function CodeCompletionQuizBody({ questions }: { questions: CodeCompletionQuestion[] }) {
  const theme = useTheme();
  const currentQuestionNumber = useCodeCompletionStore((state) => state.currentQuestionNumber);

  const { code, hint, blanks } = questions[currentQuestionNumber];
  const codeParts = code.split(blanks);

  return (
    <div className={styles.quizBody}>
      <Typography variant="h3">Заполните пропуск, опираясь на подсказку</Typography>
      <pre
        className={styles.code}
        style={{
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.divider,
          boxShadow: theme.shadows[1],
        }}
      >
        {`> ${codeParts[0]}`}

        <CodeCompletionAnswerInput currentQuestion={questions[currentQuestionNumber]} />

        {codeParts[1]}
      </pre>
      <div className={styles.tip}>
        <TipsAndUpdatesTwoToneIcon />
        <p>{hint}</p>
      </div>
    </div>
  );
}

export default CodeCompletionQuizBody;
