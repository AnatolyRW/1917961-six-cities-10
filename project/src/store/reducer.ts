import {createReducer} from '@reduxjs/toolkit';
import { offersMocks } from '../mocks/offers-mocks';
import {selectCity, fillOffers, sortOffers} from './action';
import { CitysList } from '../const';

const initialState = {
  selectCity: CitysList.Paris,
  offers: offersMocks
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      //тут нужно действие при выборе города
      state.selectCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      //тут нужно действие при заполнени предложений
      state.offers = action.payload;
    })
    .addCase(sortOffers, (state, action) =>{
      state.offers = action.payload;
    });
});

export {reducer};
