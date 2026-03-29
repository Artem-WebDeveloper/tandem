import type { DashboardData } from '@/pages/Dashboard/types';

export const DASHBOARD_DATA: DashboardData = {
  general: {
    testsCount: 30,
    totalAttempts: 116,
    completedTests: 24,
    remainTests: 6,
  },

  by_section: [
    {
      theme: 'Algorithms',
      tests: 13,
      completedTestsCount: 12,
    },
    {
      theme: 'Core JS',
      tests: 10,
      completedTestsCount: 2,
    },
    {
      theme: 'HTML',
      tests: 20,
      completedTestsCount: 12,
    },
    {
      theme: 'React',
      tests: 15,
      completedTestsCount: 8,
    },
    {
      theme: 'TypeScript',
      tests: 6,
      completedTestsCount: 6,
    },
  ],

  by_difficulty: [
    {
      difficulty: 1,
      tests: 23,
      completedTestsCount: 21,
    },
    {
      difficulty: 2,
      tests: 15,
      completedTestsCount: 7,
    },
    {
      difficulty: 3,
      tests: 9,
      completedTestsCount: 2,
    },
  ],
};
