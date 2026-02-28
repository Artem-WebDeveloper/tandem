import type { CodeCompletionTask } from '@/core/feature/CodeCompletionWidget/types';
import { MOCK_CODE_COMPLETION_DATA } from '@/core/mock/codeCompletionData';

export function fetchCodeCompletionById(id: string) {
  return new Promise<CodeCompletionTask>((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_CODE_COMPLETION_DATA.find((quiz) => quiz.id === id);

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new Error(`Квиз типа 'Code Completion' с id "${id}" не найден`));
      }
    }, 2000);
  });
}
