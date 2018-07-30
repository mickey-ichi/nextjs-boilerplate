import {LOAD_IMAGES_SUCCESS} from './constants';

export function imagesLoaded(data) {
    return {
        type: LOAD_IMAGES_SUCCESS,
        images: data
    };
}
