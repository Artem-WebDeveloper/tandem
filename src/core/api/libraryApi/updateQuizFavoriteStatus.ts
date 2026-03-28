import axiosInstance from '../config/axiosInstance';

export async function updateQuizFavoriteStatus(quizId: number) {
  await axiosInstance.post(`/quizzes/${quizId}/favorite/`);
}
