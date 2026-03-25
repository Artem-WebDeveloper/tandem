import { Typography, useTheme } from '@mui/material';
import type { CodeCompletionQuestion } from '../types';
import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import TipsAndUpdatesTwoToneIcon from '@mui/icons-material/TipsAndUpdatesTwoTone';
import CodeCompletionAnswerInput from './CodeCompletionAnswerInput/CodeCompletionAnswerInput';
import ErrorNotification from '@/core/components/ErrorNotification/ErrorNotification';

import styles from './CodeCompletionQuizBody.module.scss';

import { useTranslation } from 'react-i18next';
import { useLocale } from '@/core/i18n/useLocal';

function CodeCompletionQuizBody({ questions }: { questions: CodeCompletionQuestion[] }) {
  const theme = useTheme();
  const { t } = useTranslation('practice');
  const locale = useLocale();

  const currentQuestionNumber = useCodeCompletionStore((state) => state.currentQuestionNumber);

  if (!questions.length) return <ErrorNotification message={t('errors.missingQuestionForQuiz')} />;

  const { code, hint, blanks } = questions[currentQuestionNumber];
  const codeParts = code.split(blanks);

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
        {`> ${codeParts[0]}`}

        <CodeCompletionAnswerInput currentQuestion={questions[currentQuestionNumber]} />

        {codeParts[1]}
      </pre>
      <div className={styles.tip}>
        <TipsAndUpdatesTwoToneIcon />
        <p>{hint[locale]}</p>
      </div>
    </div>
  );
}

export default CodeCompletionQuizBody;
