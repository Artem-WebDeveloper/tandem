import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import QuizProgressBar from '@/core/components/QuizProgressBar/QuizProgressBar';

function AsyncSorterProgress({ questionsCount }: { questionsCount: number }) {
  const currentQuestionNumber = useAsyncSorterStore((state) => state.currentQuestionNumber);

  return (
    <QuizProgressBar
      currentQuestionNumber={currentQuestionNumber + 1}
      questionsCount={questionsCount}
    />
  );
}

export default AsyncSorterProgress;
