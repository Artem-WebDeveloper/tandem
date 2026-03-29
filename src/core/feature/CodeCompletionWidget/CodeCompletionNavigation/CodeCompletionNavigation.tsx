import { useCodeCompletionStore } from '@/core/store/codeCompletion.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { CodeCompletionQuestion, CodeComplitionAnswerPayload } from '../types';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';
import type { QuizAnswer, QuizResults } from '@/core/api/submitQuizAnswers';

function CodeCompletionNavigation({
  questions,
  quizId,
  onSubmit,
}: {
  questions: CodeCompletionQuestion[];
  quizId: number;
  onSubmit?: (quizResults: QuizResults<CodeComplitionAnswerPayload>) => void;
}) {
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
      onAnswersSubmit={async () => {
        const answersForApi = answers.map((answer) => ({
          question_id: answer.questionId,
          answer: answer.payload,
        }));

        const quizResults = await submitQuizAnswers(
          quizId,
          answersForApi as QuizAnswer<CodeComplitionAnswerPayload>[],
        );
        if (onSubmit) onSubmit(quizResults);
      }}
    />
  );
}

export default CodeCompletionNavigation;
