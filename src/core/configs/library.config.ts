export const difficultyLabels = {
  1: 'Easy',
  2: 'Middle',
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

export const quizTypeConfig = {
  single_choice: 'Квиз',
  code_completion: 'Вставка кода',
  async_sorter: 'Сортировка',
  true_false: 'True / False',
} as const;
