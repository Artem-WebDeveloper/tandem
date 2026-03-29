// API — Code Ordering

import type { CodeOrderingTask } from '../../feature/CodeOrderingWidget/types';
import { MOCK_CODE_ORDERING_DATA } from '../../mock/codeOrderingData';

export function fetchCodeOrderingById(id: number): Promise<CodeOrderingTask> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const task = MOCK_CODE_ORDERING_DATA.find((task) => task.id === id);

      if (task) {
        // TODO: перенести на сервер
        for (const question of task.questions) {
          question.lines.sort(() => (Math.random() > 0.5 ? 1 : -1));
        }

        resolve(task);
      } else {
        reject(new Error(`Single Choice quiz with id "${id}" not found`));
      }
    }, 2000);
  });
}
