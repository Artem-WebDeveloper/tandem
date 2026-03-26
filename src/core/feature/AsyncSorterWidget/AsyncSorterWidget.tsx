import type { AsyncSorterTask } from './types';

import AsyncSorterQuizBody from './AsyncSorterQuizBody/AsyncSorterQuizBody';
import AsyncSorterNavigation from './AsyncSorterNavigation/AsyncSorterNavigation';
import AsyncSorterProgress from './AsyncSorterProgress/AsyncSorterProgress';

function AsyncSorterWidget({ data }: { data: AsyncSorterTask }) {
  const { questions, id } = data;

  const questionsCount = questions.length;

  return (
    <div>
      <AsyncSorterProgress questionsCount={questionsCount} />

      <AsyncSorterQuizBody questions={data.questions} />

      <AsyncSorterNavigation questions={data.questions} quizId={id} />
    </div>
  );
}

export default AsyncSorterWidget;
