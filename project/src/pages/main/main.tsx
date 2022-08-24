//import { MainProps } from '../../types/props-types/props-types';
import PlaceList from '../../components/place-list/place-list';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import PlacesSorting from '../../components/places-sorting/places-sorting';
import Map from '../../components/map/map';
import { CitysListLocation, MapСategory } from '../../const';
import { useAppSelector } from '../../hooks';
import {CityDefault} from '../../mocks/offers-mocks';


function Main (): JSX.Element {
  const { offers, selectCity, selectOfferId } = useAppSelector((state) => state);
  const selectCityOffers = [...new Set(offers.filter((offer) => offer.city.name === selectCity))];
  const offersCount = selectCityOffers.length;
  const isEmptyOffers = !offersCount;
  const cityLocation = ()=> {
    const findLocation = CitysListLocation.find((element) => (element.name === selectCity));
    if (findLocation !== undefined) {
      return findLocation;
    }
    return CityDefault;
  };

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
              <PlacesSorting offers={selectCityOffers}/>
              <PlaceList />
            </section>
            <div className="cities__right-section">

              <Map offers={selectCityOffers} city={cityLocation()} className={MapСategory.Cities} activeCardId={selectOfferId}/>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
