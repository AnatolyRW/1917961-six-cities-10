import {createReducer} from '@reduxjs/toolkit';
import { offersMocks } from '../mocks/offers-mocks';
import {selectCity, fillOffers, sortOffersPopular, sortOffersPriceLow, sortOffersPriceHigh, sortOffersTop, selectOffer } from './action';
import { CitysList } from '../const';

const initialState = {
  selectCity: CitysList.Paris,
  offers: offersMocks,
  selectOfferId: 0
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      state.selectCity = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffersPopular, (state, action) =>{
      state.offers = action.payload;
    })
    .addCase(sortOffersPriceLow, (state, action) =>{
      state.offers = action.payload;
    })
    .addCase(sortOffersPriceHigh, (state, action) =>{
      state.offers = action.payload;
    })
    .addCase(sortOffersTop, (state, action) =>{
      state.offers = action.payload;
    })
    .addCase(selectOffer, (state, action) =>{
      state.selectOfferId = action.payload;
    });
});

export {reducer};
