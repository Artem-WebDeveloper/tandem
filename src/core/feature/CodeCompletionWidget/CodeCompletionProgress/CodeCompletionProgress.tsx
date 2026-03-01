import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';

function CodeCompletionProgress({ questionsCount }: { questionsCount: number }) {
  const currentQuestionNumber = useCodeCompletionStore((state) => state.currentQuestionNumber);

  return (
    <QuizProgressBar
      currentQuestionNumber={currentQuestionNumber + 1}
      questionsCount={questionsCount}
    />
  );
}

export default CodeCompletionProgress;
