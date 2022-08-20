import { useState } from 'react';

function PlacesSorting(): JSX.Element {
  const [isVisibleOption, setVisibleOption] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setVisibleOption((prevState: boolean) => !prevState)}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
          Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {isVisibleOption && <li className="places__option places__option--active" tabIndex={0}>Popular</li>}
        {isVisibleOption && <li className="places__option" tabIndex={0}>Price: low to high</li>}
        {isVisibleOption && <li className="places__option" tabIndex={0}>Price: high to low</li>}
        {isVisibleOption && <li className="places__option" tabIndex={0}>Top rated first</li>}
      </ul>
    </form>
  );
}

export default PlacesSorting;
