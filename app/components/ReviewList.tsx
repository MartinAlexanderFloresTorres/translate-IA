'use client';
import { useState } from 'react';
import Review from './Review';
import { getReviews } from '../services';
import { Review as IReview } from '../interfaces';

interface ReviewListProps {
  movieId: number;
}

export default function ReviewsList({ movieId }: ReviewListProps) {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadReviews = async () => {
    setLoading(true);
    const data = await getReviews(movieId, 1);
    if (data) setReviews(data.results);
    setLoading(false);
  };

  const handleRemoveReviews = () => {
    setReviews([]);
  };

  return (
    <div className="mt-4">
      {loading ? (
        <div className="block text-center bg-white w-full text-gray-600 border border-gray-200 px-4 py-2 rounded-md shadow-sm">Cargando comentarios...</div>
      ) : reviews.length === 0 ? (
        <button className="block bg-white w-full text-gray-600 border border-gray-200 px-4 py-2 rounded-md shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-700 cursor-pointer" onClick={handleLoadReviews} disabled={loading}>
          Ver comentarios
        </button>
      ) : (
        <button className="block bg-white w-full text-gray-600 border border-gray-200 px-4 py-2 rounded-md shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-700 cursor-pointer" onClick={handleRemoveReviews}>
          Ocultar comentarios
        </button>
      )}

      {reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  );
}
