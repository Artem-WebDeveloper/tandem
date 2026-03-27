import type { CodeOrderingTask } from './types';

import CodeOrderingQuizBody from './CodeOrderingQuizBody/CodeOrderingQuizBody';
import CodeOrderingNavigation from './CodeOrderingNavigation/CodeOrderingNavigation';
import CodeOrderingProgress from './CodeOrderingProgress/CodeOrderingProgress';

export default function CodeOrderingWidget({ data }: { data: CodeOrderingTask }) {
  const { questions, id } = data;

  const questionsCount = questions.length;

  return (
    <div>
      <CodeOrderingProgress questionsCount={questionsCount} />

      <CodeOrderingQuizBody questions={questions} />

      <CodeOrderingNavigation questions={questions} quizId={id} />
    </div>
  );
}
