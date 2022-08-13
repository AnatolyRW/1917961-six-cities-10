import { MainProps } from '../../types/props-types/props-types';
import PlaceList from '../../components/place-list/place-list';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import PlacesSorting from '../../components/places-sorting/places-sorting';

function Main ({offersProps}: MainProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersProps.offers.length} places to stay in Amsterdam</b>
              <PlacesSorting />
              <PlaceList offers={offersProps.offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
