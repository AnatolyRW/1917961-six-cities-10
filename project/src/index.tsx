import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offersMocks } from './mocks/offers-mocks';
import { reviewsMocks } from './mocks/reviews-mocks';
import { AppProps } from './types/props-types/props-types';

const appProps: AppProps = {
  mainProps: {
    offersProps: {
      offers: offersMocks
    },
    reviewsProps: {
      reviews: reviewsMocks
    }
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App mainProps={appProps.mainProps}/>
  </React.StrictMode>,
);
