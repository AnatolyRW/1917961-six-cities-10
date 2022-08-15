import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import PropertyGallery from '../../components/property-gallery/property-gallery';
import ReviewForm from '../../components/review-form/review-form';
import { MainProps } from '../../types/props-types/props-types';
import NotFound from '../not-found/not-found';
import { CityAmsterdam } from '../../mocks/offers-mocks';
import { MapСategory } from '../../const';
import Map from '../../components/map/map';
import ReviewList from '../../components/review-list/review-list';
import NearPlaceList from '../../components/near-place-list/near-place-list';
import PremiumMark from '../../components/premium-mark/premium-mark';
import RatingStars from '../../components/rating-stars/rating-stars';

function Room({offersProps, reviewsProps, nearOffersProps}: MainProps): JSX.Element {
  const { id } = useParams();
  if (id === undefined) {
    return <NotFound />;
  }

  const offer = offersProps.offers.find((item) => item.id === Number(id));
  if (offer === undefined) {
    return <NotFound />;
  }

  const {isPremium, description, isFavorite, rating, maxAdults, bedrooms, type, goods, price} = offer;
  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <PropertyGallery images={offer.images}/>
          <div className="property__container container">
            <div className="property__wrapper">
              <PremiumMark isPremium={isPremium} className={'property__mark'}/>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {description}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <RatingStars rating={rating} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (
                    <li key={`${id}-${good}`} className="property__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsProps.reviews.length}</span></h2>
                <ReviewList reviews={reviewsProps.reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <Map offers={nearOffersProps?.offers} city={CityAmsterdam} className={MapСategory.Property} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            {nearOffersProps ? <NearPlaceList offers={nearOffersProps?.offers}/> : ''}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
