import { createSelector } from 'reselect';

import {initialState} from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectImages = () =>
    createSelector(selectHome, homeState => homeState.get('images'));

export {
    selectHome,
    makeSelectImages
}
