import { TaskType } from '../types/quiz';

export const difficultyLabels = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
} as const;

export const sectionConfig = {
  'Core-js': {
    color: '#F0B429',
    bgLight: 'rgba(240, 180, 41, 0.15)',
    label: 'JS',
  },
  TypeScript: {
    color: '#60A5FA',
    bgLight: 'rgba(96, 165, 250, 0.15)',
    label: 'TS',
  },
  React: {
    color: '#06B6D4',
    bgLight: 'rgba(6, 182, 212, 0.15)',
    label: 'React',
  },
  HTML: {
    color: '#F97316',
    bgLight: 'rgba(249, 115, 22, 0.15)',
    label: 'HTML',
  },
  Algorithms: {
    color: '#8B5CF6',
    bgLight: 'rgba(139, 92, 246, 0.15)',
    label: 'Algo',
  },
} as const;

type TaskTypeKey = (typeof TaskType)[keyof typeof TaskType];

export const getQuizTypeConfig = (t: (key: string) => string): Record<TaskTypeKey, string> => ({
  [TaskType.SingleChoice]: t('filters.quizType.quiz'),
  [TaskType.CodeCompletion]: t('filters.quizType.insertingCode'),
  [TaskType.AsyncSorter]: t('filters.quizType.sorting'),
  [TaskType.TrueFalse]: t('filters.quizType.trueFalse'),
});
