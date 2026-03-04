import type { AsyncSorterTask } from '../../feature/AsyncSorterWidget/types';
import { MOCK_ASYNC_SORTER_DATA } from '../../mock/asyncSorterData';

export function fetchAsyncSorterById(id: string): Promise<AsyncSorterTask> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_ASYNC_SORTER_DATA.find((quiz) => quiz.id === id);

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new Error(`Квиз типа 'Async Sorter' с id "${id}" не найден`));
      }
    }, 2000);
  });
}
