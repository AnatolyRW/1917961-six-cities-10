import Offer from '../data-types/offer';

export type PlaceCardProps = {
  offer: Offer
  onMouseOver?: () => void;
}

export type PlaceListProps = {
  offers: Offer[]
}

export type MainPageProps = {
  placeListProps: PlaceListProps
}

export type AppProps = {
    mainPageProps: MainPageProps;
  }

