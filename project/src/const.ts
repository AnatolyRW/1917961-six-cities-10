import { PlaceCardImageSize } from './types/props-types/props-types';

export const PLACE_COUNT = 10;

export enum Rating {
  MaxCountStar = 5,
  HundredPercent = 100
}

export enum AppRoute {
  Login = '/login',
  Room = '/offer/:id',
  Favorites = '/favorites',
  Main = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PlaceCardImageSizeDefault: PlaceCardImageSize = {
  width: 260,
  height: 200
};

export const PlaceCardImageSizeFavorites: PlaceCardImageSize = {
  width: 150,
  height: 110
};
