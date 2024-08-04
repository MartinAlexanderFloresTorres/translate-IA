import { clientAxios } from '../libs';
import { ReviewResponse } from '../interfaces';

export async function getReviews(movieId: number, page: number): Promise<ReviewResponse | null> {
  try {
    const response = await clientAxios.get<ReviewResponse>(`movie/${movieId}/reviews?language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
