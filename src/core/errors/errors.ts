export const AppErrorCode = {
  QUIZ_NOT_FOUND: 'quizNotFound',
  UNKNOWN_QUIZ_TYPE: 'unknownQuizType',
  FETCH_FAILED: 'fetchFailed',
  MISSING_QUIZ_ID: 'missingQuizId',
  UNAUTHORIZED: 'unauthorized',
  NOT_FOUND: 'notFound',
} as const;

export type AppErrorCode = (typeof AppErrorCode)[keyof typeof AppErrorCode];

export class AppError extends Error {
  code: AppErrorCode;
  params?: Record<string, unknown>;

  constructor(code: AppErrorCode, params?: Record<string, unknown>) {
    super(code);
    this.code = code;
    this.params = params;
  }
}
