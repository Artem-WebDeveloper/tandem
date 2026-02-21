import QuizProgressBar from '../../components/QuizProgressBar/QuizProgressBar';
import type { CodeCompletionQuizData } from '../../api/fetchQuizById';

function CodeCompletionWidget({ data }: { data: CodeCompletionQuizData }) {
  return (
    <div>
      <QuizProgressBar currentQuestionNumber={3} questionsCount={10} />
      <div>{data.id}</div>
    </div>
  );
}

export default CodeCompletionWidget;
