import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import offersMocks from './mocks/offers-mocks';
import { AppProps } from './types/props-types/props-types';

const appProps: AppProps = {
  mainPageProps: {
    placeListProps: {
      offers: offersMocks
    }
  }
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App mainPageProps={appProps.mainPageProps}/>
  </React.StrictMode>,
);
