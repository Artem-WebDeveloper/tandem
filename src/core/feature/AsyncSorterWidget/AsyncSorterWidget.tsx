import type { AsyncSorterTask } from './types';

import AsyncSorterQuizBody from './AsyncSorterQuizBody/AsyncSorterQuizBody';
import AsyncSorterNavigation from './AsyncSorterNavigation/AsyncSorterNavigation';
import AsyncSorterProgress from './AsyncSorterProgress/AsyncSorterProgress';

function AsyncSorterWidget({ data }: { data: AsyncSorterTask }) {
  const questionsCount = data.questions.length;

  return (
    <div>
      <AsyncSorterProgress questionsCount={questionsCount} />

      <AsyncSorterQuizBody questions={data.questions} />

      <AsyncSorterNavigation questions={data.questions} />
    </div>
  );
}

export default AsyncSorterWidget;
