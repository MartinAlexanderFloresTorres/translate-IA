import { format } from '@formkit/tempo';
import AItranslate from './IA/AItranslate';
import { type Review } from '../interfaces';
import { StarIcon } from './icons';

interface ReviewProps {
  review: Review;
}

export default function Review({ review }: ReviewProps) {
  return (
    <div className="flex items-start gap-4 text-sm mt-6">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border" data-id="16">
        <img className="aspect-square h-full w-full" alt={review.author_details.name} src={review.author_details.avatar_path ? `https://image.tmdb.org/t/p/w92${review.author_details.avatar_path}` : '/placeholder-user.jpg'} />
      </span>
      <div className="grid gap-2">
        <div className="flex items-center gap-2">
          <div className="font-semibold">{review.author_details.username}</div>
          <div className="text-xs text-muted-foreground">{format(new Date(review.created_at), 'medium')}</div>
        </div>
        <div className="break-words whitespace-normal" dangerouslySetInnerHTML={{ __html: review.content }} />
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
          <StarIcon className="w-5 h-5 fill-white stroke-yellow-400" />
          <StarIcon className="w-5 h-5 fill-white stroke-yellow-400" />
          <StarIcon className="w-5 h-5 fill-white stroke-yellow-400" />
        </div>
        <AItranslate mode="inline" value={review.content} />
      </div>
    </div>
  );
}
