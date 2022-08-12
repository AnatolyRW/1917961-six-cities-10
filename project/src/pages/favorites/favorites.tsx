import FavoritesLocationItem from '../../components/favorites-location-item/favorites-location-item';
import Header from '../../components/header/header';
import { PlaceListProps } from '../../types/props-types/props-types';

function Favorites ({offers}: PlaceListProps): JSX.Element {

  const citys = [...new Set(offers.map((offer) => offer.city.name))];
  const favoritList = citys.map((city) => {
    const favoritOffers = offers.filter((offer) => offer.city.name === city);
    const keyValue = `${city}`;
    return <FavoritesLocationItem key={keyValue.toString()} city={city} offers={favoritOffers}/>;
  });

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {favoritList}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
