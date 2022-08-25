import PlaceCard from '../place-card/place-card';
import { PlaceCardFavorites } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectOffer } from '../../store/action';

function PlaceList (): JSX.Element {
  const dispatch = useAppDispatch();
  const { offers, selectCity } = useAppSelector((state) => state);
  const selectCityOffers = [...new Set(offers.filter((offer) => offer.city.name === selectCity))];
  return (
    <div className="cities__places-list places__list tabs__content">
      {selectCityOffers.map((offer) => (
        <PlaceCard
          key={`${offer.id}-${offer.title}`.toString()}
          offer={offer}
          placeCardAttributes={PlaceCardFavorites}
          onMouseOver={() => dispatch(selectOffer(offer.id))}
          onMouseOut={() => dispatch(selectOffer(0))}
        />
      ))}
    </div>
  );
}

export default PlaceList;
