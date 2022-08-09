import PlaceCard from '../place-card/place-card';
import Offer from '../../types/offer';

type PlaceListProps = {
  offers: Offer[]
}

function PlaceList ({offers}: PlaceListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({ length: offers.length }, () => <PlaceCard />)}
    </div>
  );
}

export default PlaceList;
