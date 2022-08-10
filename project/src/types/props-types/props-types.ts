import Offer from '../data-types/offer';

export type PlaceCardImageSize = {
  width: number,
  height: number
}

export type FavoritesLocationItemProps = {
  city: string,
  offers: Offer[]
}

export type PlaceCardProps = {
  offer: Offer
  placeCardImageSize: PlaceCardImageSize
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

