import PlaceCard from '../place-card/place-card';
import { PlaceListProps } from '../../types/props-types/props-types';
import { useState } from 'react';
import Offer from '../../types/data-types/offer';

function PlaceList ({offers}: PlaceListProps): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<Offer>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={`${offer.id}-${offer.title}`.toString()}
          offer={offer}
          isFavorites={false}
          onMouseOver={() => setActiveOffer(offer)}
        />
      ))}
    </div>
  );
}

export default PlaceList;
