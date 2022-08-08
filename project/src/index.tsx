import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import MainPageProps from './types/main-page-props';
import Offers from '../src/mocks/offers';
import AppProps from './types/app-props';

const mainPageProps : MainPageProps = {offers: Offers};
const appProps : AppProps = {mainPageProps: mainPageProps};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App mainPageProps={appProps.mainPageProps}/>
  </React.StrictMode>,
);
