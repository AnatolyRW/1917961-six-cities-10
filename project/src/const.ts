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

