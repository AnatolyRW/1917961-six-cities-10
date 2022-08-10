import { Link } from 'react-router-dom';
import { PlaceCardProps } from '../../types/props-types/props-types';
import { Rating } from '../../const';

function PlaceCard ({ offer, placeCardImageSize, onMouseOver,}: PlaceCardProps): JSX.Element {
  const { isPremium, isFavorite, previewImage, price, rating, type, title, id } = offer;
  const ratingPercent = Rating.HundredPercent / Rating.MaxCountStar * rating;
  const formatedType = type[0].toUpperCase() + type.slice(1);

  return (
    <article className="cities__card place-card" onMouseMove={onMouseOver}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/:${id}`}>
          <img className="place-card__image" src={previewImage} width={placeCardImageSize.width} height={placeCardImageSize.height} alt={type} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${ratingPercent}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{formatedType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
