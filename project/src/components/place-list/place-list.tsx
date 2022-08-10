import PlaceCard from '../place-card/place-card';
import PlaceListProps from '../../types/type-props/place-list-props';

function PlaceList ({offers}: PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({ length: offers.length }, () => <PlaceCard />)}
    </div>
  );
}

export default PlaceList;
