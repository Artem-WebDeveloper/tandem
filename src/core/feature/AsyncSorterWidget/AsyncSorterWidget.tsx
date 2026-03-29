import { useEffect } from 'react';

import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import type { AsyncSorterTask } from './types';
import AsyncSorterQuizBody from './AsyncSorterQuizBody/AsyncSorterQuizBody';
import AsyncSorterNavigation from './AsyncSorterNavigation/AsyncSorterNavigation';
import AsyncSorterProgress from './AsyncSorterProgress/AsyncSorterProgress';
import type { QuizResults, UserAnswerPayload } from '@/core/api/submitQuizAnswers';

function AsyncSorterWidget({
  data,
  onSubmit,
}: {
  data: AsyncSorterTask;
  onSubmit?: <T extends UserAnswerPayload>(quizResults: QuizResults<T>) => void;
}) {
  const { questions, id } = data;
  const questionsCount = questions.length;

  const resetQuizState = useAsyncSorterStore((state) => state.reset);

  useEffect(() => {
    return () => resetQuizState();
  }, [resetQuizState]);

  return (
    <div>
      <AsyncSorterProgress questionsCount={questionsCount} />

      <AsyncSorterQuizBody questions={data.questions} />

      <AsyncSorterNavigation questions={data.questions} quizId={id} onSubmit={onSubmit} />
    </div>
  );
}

export default AsyncSorterWidget;
