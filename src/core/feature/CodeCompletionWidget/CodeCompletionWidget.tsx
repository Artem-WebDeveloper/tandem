import type { CodeCompletionTask } from './types';

import CodeCompletionQuizBody from './CodeCompletionQuizBody/CodeCompletionQuizBody';
import CodeCompletionNavigation from './CodeCompletionNavigation/CodeCompletionNavigation';
import CodeCompletionProgress from './CodeCompletionProgress/CodeCompletionProgress';

function CodeCompletionWidget({ data }: { data: CodeCompletionTask }) {
  const questionsCount = data.questions.length;

  return (
    <div>
      <CodeCompletionProgress questionsCount={questionsCount} />

      <CodeCompletionQuizBody questions={data.questions} />

      <CodeCompletionNavigation questions={data.questions} />
    </div>
  );
}

export default CodeCompletionWidget;
