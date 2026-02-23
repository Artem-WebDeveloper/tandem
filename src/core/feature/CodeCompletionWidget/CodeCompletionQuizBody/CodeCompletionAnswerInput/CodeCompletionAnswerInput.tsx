import { useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useCodeCompletionStore } from '../../../../store/codeCompletion.store';

import styles from './CodeCompletionAnswerInput.module.scss';

const MIN_SYMBOLS_IN_INPUT = 3;

function CodeCompletionAnswerInput({
  currentAnswer,
  currentQuestionNumber,
}: {
  currentAnswer: string | undefined;
  currentQuestionNumber: number;
}) {
  const theme = useTheme();
  const setAnswer = useCodeCompletionStore((state) => state.setAnswer);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentQuestionNumber]);

  return (
    <input
      ref={inputRef}
      type="text"
      value={currentAnswer ?? ''}
      onChange={(event) => setAnswer(event.target.value)}
      style={{
        width: `${Math.max(currentAnswer?.length ?? 0, MIN_SYMBOLS_IN_INPUT)}ch`,
        borderColor: theme.palette.textUltralight,
        color: theme.palette.text.primary,
      }}
      className={styles.input}
    />
  );
}

export default CodeCompletionAnswerInput;
