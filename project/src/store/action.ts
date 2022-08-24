import {createAction} from '@reduxjs/toolkit';
import { CitysList } from '../const';
import Offer from '../types/data-types/offer';

export const selectCity = createAction('mainPage/selectCity', (value: CitysList) => ({payload: value}));

export const selectOffer = createAction('mainPage/selectOffer', (value: number) => ({payload: value}));

export const fillOffers = createAction('mainPage/fillOffers', (value: Offer[]) => ({payload: value}));

export const sortOffersPopular = createAction('mainPage/sortOffers/Popular', (value: Offer[]) => ({payload: value}));

export const sortOffersPriceLow = createAction('mainPage/sortOffers/PriceLow', (value: Offer[]) => ({payload: value}));

export const sortOffersPriceHigh = createAction('mainPage/sortOffers/PriceHigh', (value: Offer[]) => ({payload: value}));

export const sortOffersTop = createAction('mainPage/sortOffers/Top', (value: Offer[]) => ({payload: value}));

