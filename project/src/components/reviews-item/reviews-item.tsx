import dayjs from 'dayjs';
import { ReviewItemProps } from '../../types/props-types/props-types';
import RatingStars from '../rating-stars/rating-stars';

function ReviewsItem({review}: ReviewItemProps):JSX.Element {
  const { comment, date, rating, user } = review;
  const {avatarUrl, name } = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <RatingStars rating={rating} />
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time
          className="reviews__time"
          dateTime={dayjs(date).format('YYYY-MM-DD')}
        >
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>);
}

export default ReviewsItem;
