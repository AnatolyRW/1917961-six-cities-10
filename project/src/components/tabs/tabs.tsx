import React from 'react';
import { CitysList, citys } from '../../const';
import { useAppDispatch } from '../../hooks';
import { MouseEvent } from 'react';
import { selectCity } from '../../store/action';


type tabsProps = {
    activeCity: CitysList;
}

function Tabs({activeCity}: tabsProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citys.map((city) => (
              <li key={city} className="locations__item">
                <a
                  onClick={(evt: MouseEvent<HTMLAnchorElement>) => {
                    evt.preventDefault();
                    dispatch(selectCity(city));
                  }}
                  className={`locations__item-link tabs__item ${activeCity === city ? 'tabs__item--active' : ''}`}
                  href="/"
                >
                  <span>{city}</span>
                </a>
              </li>)
            )}
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Tabs;


