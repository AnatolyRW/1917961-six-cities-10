import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { nearPlacesOffers, offersMocks } from './mocks/offers-mocks';
import { reviewsMocks } from './mocks/reviews-mocks';
import { AppProps } from './types/props-types/props-types';
import {Provider} from 'react-redux';
import {store} from './store';
import { fillOffers } from './store/action';

const appProps: AppProps = {
  mainProps: {
    offersProps: {
      offers: offersMocks
    },
    reviewsProps: {
      reviews: reviewsMocks
    },
    nearOffersProps: {
      offers: nearPlacesOffers
    }
  }
};

store.dispatch(fillOffers(offersMocks));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App mainProps={appProps.mainProps}/>
    </Provider>
  </React.StrictMode>,
);
