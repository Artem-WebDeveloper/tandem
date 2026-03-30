import { TaskType } from '../types/quiz';

const TASK_TYPE_LABELS: Record<TaskType, string> = {
  [TaskType.SingleChoice]: 'Single Choice',
  [TaskType.CodeCompletion]: 'Code Completion',
  [TaskType.AsyncSorter]: 'Async Sorter',
  [TaskType.CodeOrdering]: 'Code Ordering',
  [TaskType.TrueFalse]: 'True/False',
};

export function getTaskTypeLabel(type: TaskType): string {
  return TASK_TYPE_LABELS[type];
}
