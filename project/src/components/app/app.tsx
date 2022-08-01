import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import MainPageProps from '../../types/main-page-props';

function App({placeCount} : MainPageProps): JSX.Element {
  return(
    //<Main placeCount={placeCount}/>
    <BrowserRouter>
      <Routes>
        <Route
          path={}
          element={}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
