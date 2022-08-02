const PLACE_COUNT = 10;

export default PLACE_COUNT;

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
