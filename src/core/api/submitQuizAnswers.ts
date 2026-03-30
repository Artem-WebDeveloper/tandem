import axiosInstance from './config/axiosInstance';

type QuizAnswer<T> = {
  question_id: number;
  answer: T;
};

export async function submitQuizAnswers<T>(quizId: number, payload: QuizAnswer<T>[]) {
  const answers = { answers: payload };
  const res = await axiosInstance.post(`/quizzes/${quizId}/submit/`, answers);

  // Временный лог, для показа ответа сервера и проверки работоспособности
  console.log(res.data);
}
