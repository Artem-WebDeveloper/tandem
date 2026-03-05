// API — Code Ordering

import type { CodeOrderingTaskResponse } from '../../feature/CodeOrderingWidget/types';
import { MOCK_SINGLE_CHOICE_DATA } from '../../mock/singleChoiceData';

export function fetchCodeOrderingById(id: string): Promise<CodeOrderingTaskResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_SINGLE_CHOICE_DATA.find((quiz) => quiz.id === id);

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new Error(`Single Choice quiz with id "${id}" not found`));
      }
    }, 2000);
  });
}
