import { useCodeOrderingStore } from '@/core/store/codeOrdering.store';
import QuizNavigation from '@/core/components/QuizNavigation/QuizNavigation';
import type { CodeOrderingQuestion } from '../types';
import { submitQuizAnswers } from '@/core/api/submitQuizAnswers';

export default function CodeOrderingNavigation({
  questions,
  quizId,
}: {
  questions: CodeOrderingQuestion[];
  quizId: number;
}) {
  const currentQuestionNumber = useCodeOrderingStore((state) => state.currentQuestionNumber);
  const currentQuestion = questions[currentQuestionNumber];

  const answers = useCodeOrderingStore((state) => state.answers);
  const currentAnswer = answers.find(
    (answer) => answer.questionId === questions[currentQuestionNumber].id,
  );

  const increaseQuestionNumber = useCodeOrderingStore((state) => state.increaseQuestionNumber);
  const decreaseQuestionNumber = useCodeOrderingStore((state) => state.decreaseQuestionNumber);

  return (
    <QuizNavigation
      currentQuestionNumber={currentQuestionNumber}
      increaseQuestionNumber={increaseQuestionNumber}
      decreaseQuestionNumber={decreaseQuestionNumber}
      questionsCount={questions.length}
      isAnswerGiven={
        !!currentAnswer && currentAnswer.payload.length === currentQuestion.codeLines.length
      }
      onAnswersSubmit={async () => {
        const answersForApi = answers.map((answer) => ({
          question_id: answer.questionId,
          answer: answer.payload,
        }));

        await submitQuizAnswers(quizId, answersForApi);
      }}
    />
  );
}
