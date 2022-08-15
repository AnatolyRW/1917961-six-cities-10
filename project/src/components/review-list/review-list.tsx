import { ReviewsProps } from '../../types/props-types/props-types';
import ReviewsItem from '../reviews-item/reviews-item';

function ReviewList({reviews}: ReviewsProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <ReviewsItem key={review.id.toString()} review={review}/>)}
    </ul>
  );
}

export default ReviewList;
