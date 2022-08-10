import { FavoritesLocationItemProps, PlaceCardImageSize } from '../../types/props-types/props-types';
import PlaceCard from '../place-card/place-card';
//import { PlaceCardImageSizeFavorites } from '../../const';

const placeCardImageSizeFavorites: PlaceCardImageSize = {
  width: 150,
  height: 110
};

function FavoritesLocationItem({city, offers}: FavoritesLocationItemProps): JSX.Element {
  const offerList = offers.map((offer) => {
    const keyValue = `${offer.id}-${offer.title}`;
    return <PlaceCard key={keyValue.toString()} offer={offer} placeCardImageSize={placeCardImageSizeFavorites}/>;
  });
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offerList}
      </div>
    </li>
  );
}

export default FavoritesLocationItem;
