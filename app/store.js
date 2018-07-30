import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {fromJS} from 'immutable';

//import the root reducer
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
};

export default function configureStore (initialState = {}) {
    const store = createStore(
        rootReducer,
        fromJS(initialState),
        bindMiddleware([sagaMiddleware])
    );

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga)
    };

    store.runSagaTask();
    return store;
}
