// API — Single Choice

import type { SingleChoiceTaskResponse } from '../../feature/SingleChoiceWidget/types';
import { MOCK_SINGLE_CHOICE_DATA } from '../../mock/singleChoiceData';
import { AppError, AppErrorCode } from '@/core/errors/errors';

export function fetchSingleChoiceById(id: number): Promise<SingleChoiceTaskResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_SINGLE_CHOICE_DATA.find((quiz) => quiz.id === id);

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new AppError(AppErrorCode.QUIZ_NOT_FOUND, { id }));
      }
    }, 2000);
  });
}
