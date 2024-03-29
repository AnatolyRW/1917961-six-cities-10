import Offer, { City } from '../types/data-types/offer';

export const CityDefault: City = {
  name: 'Paris',
  location: {
    latitude:  48.856614,
    longitude: 2.3522219,
    zoom: 13
  }
};

export const offersMocks: Offer[] = [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude:  52.367735,
        longitude: 4.904139,
        zoom: 13
      },
      name: 'Amsterdam',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Dishwasher',
      'Air conditioning',
      'Breakfast',
      'Baby seat',
      'Fridge',
      'Washer',
      'Towels',
      'Coffee machine',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max',
    },
    id: 1,
    images: [
      'https://10.react.pages.academy/static/hotel/17.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude:  52.367745,
      longitude: 4.904129,
      zoom: 1,
    },
    maxAdults: 8,
    previewImage: 'https://10.react.pages.academy/static/hotel/13.jpg',
    price: 300,
    rating: 4.5,
    title: 'Best offer in city center',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude:  50.8476424,
        longitude: 4.3571696,
        zoom: 13
      },
      name: 'Brussels',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: [
      'Air conditioning',
      'Baby seat',
      'Fridge',
      'Breakfast',
      'Towels',
      'Dishwasher',
      'Laptop friendly workspace',
      'Washer'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Angelina',
    },
    id: 2,
    images: [
      'https://10.react.pages.academy/static/hotel/17.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude:  50.8476224,
      longitude: 4.3571686,
      zoom: 16,
    },
    maxAdults: 8,
    previewImage: 'https://10.react.pages.academy/static/hotel/18.jpg',
    price: 57,
    rating: 3.8,
    title: 'Cozy room',
    type: 'room',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude:  48.856614,
        longitude: 2.3522219,
        zoom: 13
      },
      name: 'Paris',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 3,
      isPro: true,
      name: 'Alex',
    },
    id: 3,
    images: [
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude:  48.856514,
      longitude: 2.3522119,
      zoom: 16,
    },
    maxAdults: 4,
    previewImage: 'https://10.react.pages.academy/static/hotel/4.jpg',
    price: 851,
    rating: 2.8,
    title: 'New house, perfect location',
    type: 'house',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude:  48.856614,
        longitude: 2.3522219,
        zoom: 13
      },
      name: 'Paris',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Dishwasher',
      'Air conditioning',
      'Breakfast',
      'Baby seat',
      'Fridge',
      'Washer',
      'Towels',
      'Coffee machine',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 4,
      isPro: true,
      name: 'Jean-Claude',
    },
    id: 4,
    images: [
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/11.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude:  48.855514,
      longitude: 2.3521119,
      zoom: 16,
    },
    maxAdults: 2,
    previewImage: 'https://10.react.pages.academy/static/hotel/19.jpg',
    price: 111,
    rating: 4.9,
    title: 'Famous hotel near Grote Markt',
    type: 'hotel',
  }
];

export const nearPlacesOffers = [
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 1,
      },
      name: 'Dusseldorf',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 3,
      isPro: true,
      name: 'Alex',
    },
    id: 3,
    images: [
      'https://10.react.pages.academy/static/hotel/17.jpg',
      'https://10.react.pages.academy/static/hotel/9.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude:  51.2277411,
      longitude: 6.7734556,
      zoom: 16,
    },
    maxAdults: 4,
    previewImage: 'https://10.react.pages.academy/static/hotel/4.jpg',
    price: 85,
    rating: 2.8,
    title: 'New house, perfect location',
    type: 'house',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude:  50.93753,
        longitude: 6.9602786,
        zoom: 5,
      },
      name: 'Cologne',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Dishwasher',
      'Air conditioning',
      'Breakfast',
      'Baby seat',
      'Fridge',
      'Washer',
      'Towels',
      'Coffee machine',
      'Laptop friendly workspace'
    ],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 4,
      isPro: true,
      name: 'Jean-Claude',
    },
    id: 4,
    images: [
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/16.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude:  50.93743,
      longitude: 6.9602686,
      zoom: 16,
    },
    maxAdults: 2,
    previewImage: 'https://10.react.pages.academy/static/hotel/19.jpg',
    price: 111,
    rating: 4.9,
    title: 'Famous hotel near Grote Markt',
    type: 'hotel',
  }
];

