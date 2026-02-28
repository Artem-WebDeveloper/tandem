import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { CodeCompletionQuestion } from '../types';

function CodeCompletionNavigation({ questions }: { questions: CodeCompletionQuestion[] }) {
  const currentQuestionNumber = useCodeCompletionStore((state) => state.currentQuestionNumber);
  const answers = useCodeCompletionStore((state) => state.answers);
  const currentAnswer = answers.find(
    (answer) => answer.questionId === questions[currentQuestionNumber].id,
  );

  const increaseQuestionNumber = useCodeCompletionStore((state) => state.increaseQuestionNumber);
  const decreaseQuestionNumber = useCodeCompletionStore((state) => state.decreaseQuestionNumber);

  return (
    <QuizNavigation
      currentQuestionNumber={currentQuestionNumber}
      increaseQuestionNumber={increaseQuestionNumber}
      decreaseQuestionNumber={decreaseQuestionNumber}
      questionsCount={questions.length}
      isAnswerGiven={!!currentAnswer && currentAnswer.payload.length > 0}
      onAnswersSubmit={() => {
        console.log(answers);
      }} // Add answers submit
    />
  );
}

export default CodeCompletionNavigation;
