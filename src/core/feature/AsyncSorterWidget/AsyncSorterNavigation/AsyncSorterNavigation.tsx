import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { AsyncSorterQuestion } from '../types';

function AsyncSorterNavigation({ questions }: { questions: AsyncSorterQuestion[] }) {
  const currentQuestionNumber = useAsyncSorterStore((state) => state.currentQuestionNumber);
  const currentQuestion = questions[currentQuestionNumber];

  const answers = useAsyncSorterStore((state) => state.answers);
  const currentAnswer = answers.find(
    (answer) => answer.questionId === questions[currentQuestionNumber].id,
  );

  const increaseQuestionNumber = useAsyncSorterStore((state) => state.increaseQuestionNumber);
  const decreaseQuestionNumber = useAsyncSorterStore((state) => state.decreaseQuestionNumber);

  return (
    <QuizNavigation
      currentQuestionNumber={currentQuestionNumber}
      increaseQuestionNumber={increaseQuestionNumber}
      decreaseQuestionNumber={decreaseQuestionNumber}
      questionsCount={questions.length}
      isAnswerGiven={
        !!currentAnswer && currentAnswer.payload.length === currentQuestion.blocks.length
      }
      onAnswersSubmit={async () => {
        console.log(answers);
      }} // Add answers submit
    />
  );
}

export default AsyncSorterNavigation;
