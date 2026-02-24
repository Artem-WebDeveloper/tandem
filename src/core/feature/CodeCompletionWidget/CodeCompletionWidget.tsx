import type { CodeCompletionQuizData } from '../../api/fetchQuizById';
import CodeCompletionQuizBody from './CodeCompletionQuizBody/CodeCompletionQuizBody';
import CodeCompletionNavigation from './CodeCompletionNavigation/CodeCompletionNavigation';
import CodeCompletionProgress from './CodeCompletionProgress/CodeCompletionProgress';

function CodeCompletionWidget({ data }: { data: CodeCompletionQuizData }) {
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
