import { FavoritesLocationItemProps } from '../../types/props-types/props-types';
import PlaceCard from '../place-card/place-card';


function FavoritesLocationItem({city, offers}: FavoritesLocationItemProps): JSX.Element {
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
        {offers.map((offer) => (
          <PlaceCard
            key={`${offer.id}-${offer.title}`.toString()}
            offer={offer}
            isFavorites
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocationItem;
