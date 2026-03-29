import { Difficulty, TaskType, type TaskTheme } from '../types/quiz';

export const difficultyLabels = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
} as const;

export const sectionConfig = {
  'Core JS': {
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
  [TaskType.CodeOrdering]: t('filters.quizType.codeOrdering'),
});

// Type guards для Selectors в Filters
export const isTaskTheme = (value: string): value is TaskTheme => value in sectionConfig;

export const isTaskType = (value: string): value is TaskType =>
  (Object.values(TaskType) as string[]).includes(value);

export const isDifficulty = (value: number): value is Difficulty =>
  (Object.values(Difficulty) as number[]).includes(value);

//URL parsers для валидирования значения фильтров Library
export function parseSection(value: string | null): TaskTheme | 'all' | 'Favorites' {
  if (value === 'Favorites') return 'Favorites';
  if (value && isTaskTheme(value)) return value;
  return 'all';
}

export function parseQuizType(value: string | null): TaskType | 'all' {
  if (value && isTaskType(value)) return value;
  return 'all';
}

export function parseDifficulty(value: string | null): Difficulty | 'all' {
  const num = Number(value);
  if (value && isDifficulty(num)) return num;
  return 'all';
}

export const parsePerfect = (value: string | null): 'all' | 'true' | 'false' => {
  if (value === 'true' || value === 'false') return value;
  return 'all';
};
