import { Link } from 'react-router-dom';
import { PlaceCardProps } from '../../types/props-types/props-types';
import PremiumMark from '../premium-mark/premium-mark';
import RatingStars from '../rating-stars/rating-stars';

function PlaceCard ({ offer, placeCardAttributes, onMouseOver, onMouseOut}: PlaceCardProps): JSX.Element {
  const { isPremium, isFavorite, previewImage, price, rating, type, title, id } = offer;
  const { card, imageWrapper, cardInfo, imgWidth, imgHeight } = placeCardAttributes;
  const formatedType = type[0].toUpperCase() + type.slice(1);

  return (
    <article className={`${card} place-card`} onMouseMove={onMouseOver} onMouseOut={onMouseOut}>
      <PremiumMark isPremium={isPremium} className={'place-card__mark'} />
      <div className={`${imageWrapper} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage}
            width={imgWidth}
            height={imgHeight}
            alt={type}
          />
        </Link>
      </div>
      <div className={`place-card__info ${cardInfo}`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`button place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <RatingStars rating={rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{formatedType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
