import type { CodeOrderingTask } from './types';

import CodeOrderingQuizBody from './CodeOrderingQuizBody/CodeOrderingQuizBody';
import CodeOrderingNavigation from './CodeOrderingNavigation/CodeOrderingNavigation';
import CodeOrderingProgress from './CodeOrderingProgress/CodeOrderingProgress';

export default function CodeOrderingWidget({ data }: { data: CodeOrderingTask }) {
  const questionsCount = data.questions.length;

  return (
    <div>
      <CodeOrderingProgress questionsCount={questionsCount} />

      <CodeOrderingQuizBody questions={data.questions} />

      <CodeOrderingNavigation questions={data.questions} />
    </div>
  );
}
