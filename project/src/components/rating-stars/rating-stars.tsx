import React from 'react';
import { Rating } from '../../const';

type RatingStartProps = {
  rating: number
}

function RatingStars({rating}: RatingStartProps): JSX.Element {
  const ratingPercent = Rating.HundredPercent / Rating.MaxCountStar * rating;
  return (
    <React.Fragment>
      <span style={{ width: `${ratingPercent}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </React.Fragment>
  );
}

export default RatingStars;
