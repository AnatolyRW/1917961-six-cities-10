import {createAction} from '@reduxjs/toolkit';
import { CitysList } from '../const';
import Offer from '../types/data-types/offer';

export const selectCity = createAction('mainPage/selectCity', (value: CitysList) => ({payload: value}));

export const fillOffers = createAction('mainPage/fillOffers', (value: Offer[]) => ({payload: value}));
