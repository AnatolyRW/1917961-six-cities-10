import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import Offer from '../../types/data-types/offer';
import { OffersProps } from '../../types/props-types/props-types';
import { MouseEvent } from 'react';
import { sortOffersPopular, sortOffersPriceHigh, sortOffersPriceLow, sortOffersTop } from '../../store/action';
import { TypeOffersSort } from '../../const';

function PlacesSorting({offers}: OffersProps): JSX.Element {
  const [isVisibleOption, setVisibleOption] = useState(false);
  const [typeOffersSort, setTypeOffersSort] = useState(TypeOffersSort.Popular);
  const dispatch = useAppDispatch();

  const sortPopular = (offersForSort: Offer[]) => offersForSort.sort((a,b) => a.id - b.id);

  const sortPriceLow = (offersForSort: Offer[]) => offersForSort.sort((a,b) => a.price - b.price);

  const sortPriceHigh = (offersForSort: Offer[]) => offersForSort.sort((a,b) => b.price - a.price);

  const sortTop = (offersForSort: Offer[]) => offersForSort.sort((a,b) => b.rating - a.rating);

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setVisibleOption((prevState: boolean) => !prevState)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {typeOffersSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {
          isVisibleOption &&
          <li
            className={`places__option ${typeOffersSort === TypeOffersSort.Popular ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={(evt: MouseEvent<HTMLElement>) => {
              evt.preventDefault();
              setTypeOffersSort(TypeOffersSort.Popular);
              dispatch(sortOffersPopular(sortPopular(offers)));
            }}
          >
            Popular
          </li>
        }
        {
          isVisibleOption &&
          <li
            className={`places__option ${typeOffersSort === TypeOffersSort.PriceLow ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={(evt: MouseEvent<HTMLElement>) => {
              evt.preventDefault();
              setTypeOffersSort(TypeOffersSort.PriceLow);
              dispatch(sortOffersPriceLow(sortPriceLow(offers)));
            }}
          >
            Price: low to high
          </li>
        }
        {
          isVisibleOption &&
          <li
            className={`places__option ${typeOffersSort === TypeOffersSort.PriceHigh ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={(evt: MouseEvent<HTMLElement>) => {
              evt.preventDefault();
              setTypeOffersSort(TypeOffersSort.PriceHigh);
              dispatch(sortOffersPriceHigh(sortPriceHigh(offers)));
            }}
          >
            Price: high to low
          </li>
        }
        {
          isVisibleOption &&
          <li
            className={`places__option ${typeOffersSort === TypeOffersSort.Top ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={(evt: MouseEvent<HTMLElement>) => {
              evt.preventDefault();
              setTypeOffersSort(TypeOffersSort.Top);
              dispatch(sortOffersTop(sortTop(offers)));
            }}
          >
              Top rated first
          </li>
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
