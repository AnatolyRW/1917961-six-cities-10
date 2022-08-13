import PlaceCard from '../place-card/place-card';
import { PlaceCardAttributes, OffersProps } from '../../types/props-types/props-types';
import { useState } from 'react';
import Offer from '../../types/data-types/offer';

export const PlaceCardFavorites: PlaceCardAttributes = {
  card: 'cities__card',
  imageWrapper: 'cities__image-wrapper',
  cardInfo: '',
  imgWidth: 260,
  imgHeight: 200
};

function PlaceList ({offers}: OffersProps): JSX.Element {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOffer, setActiveOffer] = useState<Offer>();

  return (
    <div className="cities__places-list places__list tabs__content">
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

export default PlaceList;
