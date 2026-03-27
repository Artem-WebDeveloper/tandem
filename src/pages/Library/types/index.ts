import type { BaseTask, Difficulty, TaskTheme, TaskType } from '@/core/types/quiz';

export interface LibraryQuiz extends BaseTask {
  section: TaskTheme;
  tags: string[];
  description?: {
    ru: string;
    en: string;
  };
  questions_count: number;
  user_progress: UserProgress;
  // isComplete: boolean;
  isFavorite: boolean;
}

type UserProgress = {
  is_completed: boolean;
  latest_score: null | number;
  best_result: null | number;
};

export type LibraryFilters = {
  section: TaskTheme | 'all' | 'Favorites';
  quiz_type: TaskType | 'all';
  difficulty: Difficulty | 'all';
};

export interface LibraryResponse {
  count: number;
  previous: string | null;
  next: string | null;
  total_pages: number;
  results: LibraryQuiz[];
}
