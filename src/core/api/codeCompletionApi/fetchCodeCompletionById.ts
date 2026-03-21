import type { CodeCompletionTask } from '@/core/feature/CodeCompletionWidget/types';
import { MOCK_CODE_COMPLETION_DATA } from '@/core/mock/codeCompletionData';
import { AppError, AppErrorCode } from '@/core/errors/errors';

export function fetchCodeCompletionById(id: string): Promise<CodeCompletionTask> {
  return new Promise<CodeCompletionTask>((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_CODE_COMPLETION_DATA.find((quiz) => quiz.id === id);

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new AppError(AppErrorCode.QUIZ_NOT_FOUND, { id }));
      }
    }, 2000);
  });
}
