import { useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useCodeCompletionStore } from '../../../../store/codeCompletion.store';

import styles from './CodeCompletionAnswerInput.module.scss';
import type { CodeCompletionQuestion } from '../../types';

const MIN_SYMBOLS_IN_INPUT = 3;

function CodeCompletionAnswerInput({
  currentQuestion,
}: {
  currentQuestion: CodeCompletionQuestion;
}) {
  const theme = useTheme();

  const setAnswer = useCodeCompletionStore((state) => state.setAnswer);
  const answers = useCodeCompletionStore((state) => state.answers);
  const currentAnswer = answers.find((answer) => answer.questionId === currentQuestion.id);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentQuestion]);

  function handleInput(event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
    setAnswer(currentQuestion.id, event.target.value);
  }

  return (
    <input
      ref={inputRef}
      type="text"
      value={currentAnswer?.payload ?? ''}
      onChange={handleInput}
      style={{
        width: `${Math.max(currentAnswer?.payload.length ?? 0, MIN_SYMBOLS_IN_INPUT)}ch`,
        borderColor: theme.palette.textUltralight,
        color: theme.palette.text.primary,
      }}
      className={styles.input}
    />
  );
}

export default CodeCompletionAnswerInput;
