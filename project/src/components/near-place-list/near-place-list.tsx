import PlaceCard from '../place-card/place-card';
import { OffersProps } from '../../types/props-types/props-types';
import { useState } from 'react';
import Offer from '../../types/data-types/offer';
import { PlaceCardFavorites } from '../../const';

function NearPlaceList ({offers}: OffersProps): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<Offer>();

  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <PlaceCard
          key={`${offer.id}-${offer.title}`.toString()}
          offer={offer}
          placeCardAttributes={PlaceCardFavorites}
          onMouseOver={() => setActiveOffer(offer)}
        />
      ))}
    </div>
  );
}

export default NearPlaceList;
