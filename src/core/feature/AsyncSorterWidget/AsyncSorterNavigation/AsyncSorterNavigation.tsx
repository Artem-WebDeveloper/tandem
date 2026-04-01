import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { AsyncSorterQuestion, AsyncSorterAnswerPayload } from '../types';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';
import type { QuizAnswer, QuizResults } from '@/core/api/submitQuizAnswers';

function AsyncSorterNavigation({
  questions,
  quizId,
  onSubmit,
}: {
  questions: AsyncSorterQuestion[];
  quizId: number;
  onSubmit?: (
    quizResults: QuizResults<AsyncSorterAnswerPayload> | null,
    isLoading: boolean,
  ) => void;
}) {
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
        const answersForApi: QuizAnswer<AsyncSorterAnswerPayload>[] = answers.map((answer) => ({
          question_id: answer.questionId,
          answer: answer.payload,
        }));

        if (onSubmit) onSubmit(null, true);
        const quizResults = await submitQuizAnswers(quizId, answersForApi);
        if (onSubmit) onSubmit(quizResults, false);
      }}
    />
  );
}

export default AsyncSorterNavigation;
