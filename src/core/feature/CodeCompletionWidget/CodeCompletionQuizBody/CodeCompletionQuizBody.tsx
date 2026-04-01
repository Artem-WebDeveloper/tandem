import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import styles from './CodeCompletionQuizBody.module.scss';

import { useLocale } from '@/core/i18n/useLocal';
import { useThemeStore } from '@/core/store/theme.store';
import type { CodeCompletionQuestion } from '../types';
import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import CodeCompletionAnswerInput from './CodeCompletionAnswerInput/CodeCompletionAnswerInput';
import ErrorNotification from '@/core/components/ErrorNotification/ErrorNotification';
import type { TaskTheme } from '@/core/types/quiz';

function CodeCompletionQuizBody({
  section,
  questions,
}: {
  section: TaskTheme;
  questions: CodeCompletionQuestion[];
}) {
  const theme = useTheme();
  const { t } = useTranslation('practice');
  const locale = useLocale();
  const appMode = useThemeStore((state) => state.mode);

  const currentQuestionNumber = useCodeCompletionStore((state) => state.currentQuestionNumber);

  if (!questions.length) return <ErrorNotification message={t('errors.missingQuestionForQuiz')} />;

  const { code, hint, blanks } = questions[currentQuestionNumber];
  const codeParts = code.split(blanks);

  const language = section === 'HTML' ? 'htmlbars' : 'javascript';

  return (
    <div className={styles.quizBody}>
      <Typography variant="h3">{t('codeCompletion.instruction')}</Typography>
      <pre
        className={styles.code}
        style={{
          backgroundColor: theme.palette.background.default,
          borderColor: theme.palette.divider,
          boxShadow: theme.shadows[1],
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={appMode === 'light' ? docco : railscasts}
          wrapLongLines
          customStyle={{
            display: 'inline',
            padding: 0,
            backgroundColor: theme.palette.background.default,
          }}
        >{`> ${codeParts[0]}`}</SyntaxHighlighter>

        <CodeCompletionAnswerInput currentQuestion={questions[currentQuestionNumber]} />

        <SyntaxHighlighter
          language={language}
          style={appMode === 'light' ? docco : railscasts}
          wrapLongLines
          customStyle={{
            display: 'inline',
            padding: 0,
            backgroundColor: theme.palette.background.default,
          }}
        >
          {codeParts[1]}
        </SyntaxHighlighter>
      </pre>

      <div className={styles.tip}>
        <TipsAndUpdatesTwoToneIcon />
        <p>{hint[locale]}</p>
      </div>
    </div>
  );
}

export default CodeCompletionQuizBody;
