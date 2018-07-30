import {all, fork} from 'redux-saga/effects';
import es6promise from 'es6-promise';
es6promise.polyfill();

import watchHome from '../containers/Home/saga';

export default function * rootSaga () {
    yield all([
        fork(watchHome),
    ]);
}
