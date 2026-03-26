import { useAsyncSorterStore } from '@/core/store/asyncSorter.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { AsyncSorterQuestion } from '../types';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';
import type {
  AsyncSorterUserAnswerPayload,
  QuizAnswer,
  QuizResults,
  UserAnswerPayload,
} from '@/core/api/submitQuizAnswers';

function AsyncSorterNavigation({
  questions,
  quizId,
  onSubmit,
}: {
  questions: AsyncSorterQuestion[];
  quizId: number;
  onSubmit?: <T extends UserAnswerPayload>(quizResults: QuizResults<T>) => void;
}) {
  const currentQuestionNumber = useAsyncSorterStore((state) => state.currentQuestionNumber);
  const currentQuestion = questions[currentQuestionNumber];

  const answers = useAsyncSorterStore((state) => state.answers);
  const currentAnswer = answers.find(
    (answer) => answer.questionId === questions[currentQuestionNumber].id,
  );

  const increaseQuestionNumber = useAsyncSorterStore((state) => state.increaseQuestionNumber);
  const decreaseQuestionNumber = useAsyncSorterStore((state) => state.decreaseQuestionNumber);
  const resetQuizState = useAsyncSorterStore((state) => state.reset);

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
        const answersForApi = answers.map((answer) => ({
          question_id: answer.questionId,
          answer: answer.payload,
        }));

        const quizResults = await submitQuizAnswers(
          quizId,
          answersForApi as QuizAnswer<AsyncSorterUserAnswerPayload>[],
        );
        if (onSubmit) onSubmit(quizResults);

        resetQuizState();
      }}
    />
  );
}

export default AsyncSorterNavigation;
