import { getMovies } from '../services';
import Movie from './Movie';

export default async function MovieList() {
  const data = await getMovies(1);

  if (!data) {
    return <div className="text-center">No se pudieron cargar las películas</div>;
  }

  return (
    <section className="w-full p-8 md:p-24">
      <div className="mx-auto max-w-2xl grid gap-12">
        {data.results.map((movie, index) => (
          <Movie key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
}
