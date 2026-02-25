// API — Single Choice

import type { SingleChoiceTaskResponse } from '../types';
import { MOCK_SINGLE_CHOICE_DATA } from '../mock/mockData';

export function fetchSingleChoiceById(id: string): Promise<SingleChoiceTaskResponse> {
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
