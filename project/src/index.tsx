import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import MainPageProps from './types/main-page-props';
import PLACE_COUNT from './const';

const Setting : MainPageProps = {placeCount: PLACE_COUNT};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App placeCount={Setting.placeCount}/>
  </React.StrictMode>,
);
