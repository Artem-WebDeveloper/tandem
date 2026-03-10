// API — Code Ordering

import type { CodeOrderingTask } from '../../feature/CodeOrderingWidget/types';
import { MOCK_CODE_ORDERING_DATA } from '../../mock/codeOrderingData';

export function fetchCodeOrderingById(id: string): Promise<CodeOrderingTask> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_CODE_ORDERING_DATA.find((quiz) => quiz.id === id);

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new Error(`Single Choice quiz with id "${id}" not found`));
      }
    }, 2000);
  });
}
