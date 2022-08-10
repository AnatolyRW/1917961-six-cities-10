import PlaceCard from '../place-card/place-card';
import { PlaceCardImageSize, PlaceListProps } from '../../types/props-types/props-types';
import { useState } from 'react';
import Offer from '../../types/data-types/offer';

const placeCardImageSizeDefault: PlaceCardImageSize = {
  width: 260,
  height: 200
};

function PlaceList ({offers}: PlaceListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<Offer>();
  const offerList = offers.map((offer) => {
    const keyValue = `${offer.id}-${offer.title}`;
    return <PlaceCard key={keyValue.toString()} offer={offer} placeCardImageSize={placeCardImageSizeDefault} onMouseOver={() => setActiveOffer(offer)} />;
  });
  return (
    <div className="cities__places-list places__list tabs__content">
      {offerList}
    </div>
  );
}

export default PlaceList;
