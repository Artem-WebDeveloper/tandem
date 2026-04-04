import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { AsyncSorterQuestion, AsyncSorterAnswerPayload } from '../types';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';
import type { QuizAnswer } from '@/core/api/submitQuizAnswers';
import { useQuizResultsStore } from '@/core/store/quizResults.store';

function AsyncSorterNavigation({
  questions,
  quizId,
}: {
  questions: AsyncSorterQuestion[];
  quizId: number;
}) {
  const setQuizResults = useQuizResultsStore((state) => state.setQuizResults);

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

        const quizResults = await submitQuizAnswers(quizId, answersForApi);
        setQuizResults(quizResults);
      }}
    />
  );
}

export default AsyncSorterNavigation;
