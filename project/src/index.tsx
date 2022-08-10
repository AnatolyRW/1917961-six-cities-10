import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import MainPageProps from './types/type-props/main-page-props';
import offers from '../src/mocks/offers';
import AppProps from './types/type-props/app-props';
import PlaceListProps from './types/type-props/place-list-props';

const placeListProps: PlaceListProps = {offers: offers};
const mainPageProps: MainPageProps = {placeListProps: placeListProps};
const appProps: AppProps = {mainPageProps: mainPageProps};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App mainPageProps={appProps.mainPageProps}/>
  </React.StrictMode>,
);
