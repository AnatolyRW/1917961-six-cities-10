import { MainProps } from '../../types/props-types/props-types';
import PlaceList from '../../components/place-list/place-list';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Map from '../../components/map/map';
import { MapСategory, CitysListLocation } from '../../const';
import { useAppSelector } from '../../hooks';

function Main ({offersProps}: MainProps): JSX.Element {
  const { offers, selectCity } = useAppSelector((state) => state);
  const selectCityOffers = [...new Set(offers.filter((offer) => offer.city.name === selectCity))];
  const offersCount = selectCityOffers.length;
  const isEmptyOffers = !offersCount;
  const cityLocation = CitysListLocation.find((element) => (element.name === selectCity));

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${isEmptyOffers ? 'page__main--index-empty' : ''}`}>
        <Tabs activeCity={selectCity}/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{selectCityOffers.length} places to stay in Amsterdam</b>
              <PlacesSorting />
              <PlaceList offers={selectCityOffers} />
            </section>
            <div className="cities__right-section">

              <Map offers={selectCityOffers} city={cityLocation ? cityLocation : CitysListLocation[5]} className={MapСategory.Cities} />

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
