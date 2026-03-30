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
  is_favorite: boolean;
}

type UserProgress = {
  is_completed: boolean;
  latest_score: null | number;
  best_result: null | number;
  is_perfect: boolean;
};

export type LibraryFilters = {
  section: TaskTheme | 'all' | 'Favorites';
  quiz_type: TaskType | 'all';
  difficulty: Difficulty | 'all';
  is_perfect: 'all' | 'true' | 'false';
};

export interface LibraryResponse {
  count: number;
  previous: string | null;
  next: string | null;
  total_pages: number;
  results: LibraryQuiz[];
}
