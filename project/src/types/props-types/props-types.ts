import Offer from '../data-types/offer';
import Review from '../data-types/review';

export type PlaceCardAttributes = {
  card: string,
  imageWrapper: string,
  cardInfo: string,
  imgWidth: number,
  imgHeight: number

}

export type PlaceCardProps = {
  offer: Offer
  placeCardAttributes: PlaceCardAttributes,
  onMouseOver?: () => void;
}

export type FavoritesLocationItemProps = {
  city: string,
  offers: Offer[]
}

export type ReviewsProps = {
  reviews: Review[]
}

export type OffersProps = {
  offers: Offer[]
}

export type MainProps = {
  offersProps: OffersProps,
  reviewsProps?: ReviewsProps
}

export type AppProps = {
    mainProps: MainProps;
  }

