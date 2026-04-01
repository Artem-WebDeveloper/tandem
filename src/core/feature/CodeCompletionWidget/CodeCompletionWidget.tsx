import { useEffect } from 'react';

import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import type { CodeCompletionTask, CodeCompletionAnswerPayload } from './types';
import CodeCompletionQuizBody from './CodeCompletionQuizBody/CodeCompletionQuizBody';
import CodeCompletionNavigation from './CodeCompletionNavigation/CodeCompletionNavigation';
import CodeCompletionProgress from './CodeCompletionProgress/CodeCompletionProgress';
import type { QuizResults } from '@/core/api/submitQuizAnswers';

function CodeCompletionWidget({
  data,
  onSubmit,
}: {
  data: CodeCompletionTask;
  onSubmit?: (
    quizResults: QuizResults<CodeCompletionAnswerPayload> | null,
    isLoading: boolean,
  ) => void;
}) {
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

      <CodeCompletionNavigation questions={questions} quizId={id} onSubmit={onSubmit} />
    </div>
  );
}

export default CodeCompletionWidget;
