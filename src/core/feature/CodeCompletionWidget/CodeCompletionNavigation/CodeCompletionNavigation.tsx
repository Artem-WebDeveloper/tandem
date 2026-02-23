import { useCodeCompletionStore } from '../../../store/codeCompletion.store';
import QuizNavigation from '../../../components/QuizNavigation/QuizNavigation';

function CodeCompletionNavigation({ questionsCount }: { questionsCount: number }) {
  const currentQuestionNumber = useCodeCompletionStore((state) => state.currentQuestionNumber);
  const answers = useCodeCompletionStore((state) => state.answers);
  const increaseQuestionNumber = useCodeCompletionStore((state) => state.increaseQuestionNumber);
  const decreaseQuestionNumber = useCodeCompletionStore((state) => state.decreaseQuestionNumber);

  return (
    <QuizNavigation
      currentQuestionNumber={currentQuestionNumber}
      increaseQuestionNumber={increaseQuestionNumber}
      decreaseQuestionNumber={decreaseQuestionNumber}
      questionsCount={questionsCount}
      isAnswerGiven={answers[currentQuestionNumber]?.length > 0}
      onAnswersSubmit={() => {}} // Add answers submit
    />
  );
}

export default CodeCompletionNavigation;
