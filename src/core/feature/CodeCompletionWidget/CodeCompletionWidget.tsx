import { useEffect } from 'react';

import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import type { CodeCompletionTask } from './types';
import CodeCompletionQuizBody from './CodeCompletionQuizBody/CodeCompletionQuizBody';
import CodeCompletionNavigation from './CodeCompletionNavigation/CodeCompletionNavigation';
import CodeCompletionProgress from './CodeCompletionProgress/CodeCompletionProgress';

function CodeCompletionWidget({ data }: { data: CodeCompletionTask }) {
  const { questions, id } = data;
  const questionsCount = questions.length;

  const resetQuizState = useCodeCompletionStore((state) => state.reset);

  useEffect(() => {
    return () => resetQuizState();
  }, [resetQuizState]);

  return (
    <div>
      <CodeCompletionProgress questionsCount={questionsCount} />

      <CodeCompletionQuizBody questions={questions} />

      <CodeCompletionNavigation questions={questions} quizId={id} />
    </div>
  );
}

export default CodeCompletionWidget;
