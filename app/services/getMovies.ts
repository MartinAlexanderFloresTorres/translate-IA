import { clientAxios } from '../libs';
import { MovieResponse } from '../interfaces';

export async function getMovies(page: number): Promise<MovieResponse | null> {
  try {
    const response = await clientAxios.get<MovieResponse>(`movie/popular?language=en-US&page=${page}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
