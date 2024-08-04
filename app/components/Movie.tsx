import { type Movie } from '../interfaces';
import { StarIcon } from './icons';
import CommentsList from './ReviewList';
import AItranslate from './IA/AItranslate';

interface MovieProps {
  movie: Movie;
}

export default async function Movie({ movie }: MovieProps) {
  return (
    <article>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} width={400} height={225} className="w-full h-56 object-cover" style={{ aspectRatio: '400/225', objectFit: 'cover' }} />
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
            {movie.vote_average}
            <StarIcon className="w-4 h-4 inline-block ml-1 fill-yellow-400" />
            <span className="ml-1">({movie.vote_count})</span>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 break-words whitespace-normal">{movie.title}</h2>
          <p className="text-muted-foreground mb-4 break-words whitespace-normal">{movie.overview}</p>
          <AItranslate mode="modal" value={movie.overview} />
        </div>
      </div>

      <CommentsList movieId={movie.id} />
    </article>
  );
}
