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

export enum MapСategory {
  Property = 'property__map',
  Cities = 'cities__map',
}

export const IconParameter = {
  Size: {
    x: 27,
    y: 39
  },
  Anchor: {
    x: 13.5,
    y: 39
  },
  Url: {
    Default: 'img/pin.svg',
    Current: 'img/pin-active.svg'
  }
} as const;

