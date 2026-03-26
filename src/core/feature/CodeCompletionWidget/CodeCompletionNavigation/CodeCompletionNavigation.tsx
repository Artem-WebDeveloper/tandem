import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { CodeCompletionQuestion } from '../types';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';

function CodeCompletionNavigation({
  questions,
  quizId,
}: {
  questions: CodeCompletionQuestion[];
  quizId: number;
}) {
  const currentQuestionNumber = useCodeCompletionStore((state) => state.currentQuestionNumber);
  const answers = useCodeCompletionStore((state) => state.answers);
  const currentAnswer = answers.find(
    (answer) => answer.questionId === questions[currentQuestionNumber].id,
  );

  const increaseQuestionNumber = useCodeCompletionStore((state) => state.increaseQuestionNumber);
  const decreaseQuestionNumber = useCodeCompletionStore((state) => state.decreaseQuestionNumber);
  const resetQuizState = useCodeCompletionStore((state) => state.reset);

  return (
    <QuizNavigation
      currentQuestionNumber={currentQuestionNumber}
      increaseQuestionNumber={increaseQuestionNumber}
      decreaseQuestionNumber={decreaseQuestionNumber}
      questionsCount={questions.length}
      isAnswerGiven={!!currentAnswer && currentAnswer.payload.length > 0}
      onAnswersSubmit={async () => {
        const answersForApi = answers.map((answer) => ({
          question_id: answer.questionId,
          answer: answer.payload,
        }));

        await submitQuizAnswers(quizId, answersForApi);
        resetQuizState();
      }}
    />
  );
}

export default CodeCompletionNavigation;
