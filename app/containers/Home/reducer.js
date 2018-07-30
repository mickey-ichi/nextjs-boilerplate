import { fromJS } from 'immutable';

import {
    LOAD_IMAGES_SUCCESS,
} from './constants';

export const initialState = fromJS({
    images: [],
});

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_IMAGES_SUCCESS:
            return state
                .set('images', action.images);
        default:
            return state;
    }
}

export default homeReducer;
