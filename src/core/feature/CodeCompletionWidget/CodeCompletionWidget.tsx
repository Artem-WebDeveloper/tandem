import type { CodeCompletionTask } from './types';

import CodeCompletionQuizBody from './CodeCompletionQuizBody/CodeCompletionQuizBody';
import CodeCompletionNavigation from './CodeCompletionNavigation/CodeCompletionNavigation';
import CodeCompletionProgress from './CodeCompletionProgress/CodeCompletionProgress';
import type { QuizResults, UserAnswerPayload } from '@/core/api/submitQuizAnswers';

function CodeCompletionWidget({
  data,
  onSubmit,
}: {
  data: CodeCompletionTask;
  onSubmit?: <T extends UserAnswerPayload>(quizResults: QuizResults<T>) => void;
}) {
  const { questions, id } = data;

  const questionsCount = questions.length;

  return (
    <div>
      <CodeCompletionProgress questionsCount={questionsCount} />

      <CodeCompletionQuizBody questions={questions} />

      <CodeCompletionNavigation questions={questions} quizId={id} onSubmit={onSubmit} />
    </div>
  );
}

export default CodeCompletionWidget;
