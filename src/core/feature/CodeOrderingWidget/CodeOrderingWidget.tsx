import { useEffect } from 'react';

import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import type { CodeOrderingTask, CodeOrderingAnswerPayload } from './types';
import CodeOrderingQuizBody from './CodeOrderingQuizBody/CodeOrderingQuizBody';
import CodeOrderingNavigation from './CodeOrderingNavigation/CodeOrderingNavigation';
import CodeOrderingProgress from './CodeOrderingProgress/CodeOrderingProgress';
import type { QuizResults } from '@/core/api/submitQuizAnswers';

export default function CodeOrderingWidget({
  data,
  onSubmit,
}: {
  data: CodeOrderingTask;
  onSubmit?: (
    quizResult: QuizResults<CodeOrderingAnswerPayload> | null,
    isLoading: boolean,
  ) => void;
}) {
  const { questions, id } = data;
  const questionsCount = questions.length;

  const resetQuizState = useCodeOrderingStore((state) => state.reset);

  useEffect(() => {
    return () => resetQuizState();
  }, [resetQuizState]);

  return (
    <div>
      <CodeOrderingProgress questionsCount={questionsCount} />

      <CodeOrderingQuizBody questions={questions} />

      <CodeOrderingNavigation questions={questions} quizId={id} onSubmit={onSubmit} />
    </div>
  );
}
