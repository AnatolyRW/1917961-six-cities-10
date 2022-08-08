import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import Room from '../../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import AppProps from '../../types/app-props';

function App({mainPageProps}: AppProps): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<Main offers={mainPageProps.offers}/>}
        />
        <Route
          path = {AppRoute.Login}
          element = {<Login />}
        />
        <Route
          path = {AppRoute.Favorites}
          element = {
            <PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path = {AppRoute.Room}
          element = {<Room />}
        />
        <Route
          path = '*'
          element = {<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
