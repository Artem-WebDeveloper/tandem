import axiosInstance from '../config/axiosInstance';

export async function updateQuizFavoriteStatus(quizId: number) {
  const res = await axiosInstance.post(`/quizzes/${quizId}/favorite/`);

  // Временный лог, для показа ответа сервера и проверки работоспособности
  console.log(res.data);
}
