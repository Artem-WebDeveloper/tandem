import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';

export default function CodeOrderingProgress({ questionsCount }: { questionsCount: number }) {
  const currentQuestionNumber = useCodeOrderingStore((state) => state.currentQuestionNumber);

  return (
    <QuizProgressBar
      currentQuestionNumber={currentQuestionNumber + 1}
      questionsCount={questionsCount}
    />
  );
}
