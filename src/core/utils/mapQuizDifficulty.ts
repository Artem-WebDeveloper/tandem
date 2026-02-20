const QUIZ_DIFFICULTY_MAP: Record<number, string> = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
};

export function mapQuizDifficulty(difficulty: number) {
  return QUIZ_DIFFICULTY_MAP[difficulty] || 'Unknown';
}
