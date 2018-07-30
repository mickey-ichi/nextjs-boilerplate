import { reducer } from 'redux-form'
import { combineReducers } from 'redux-immutable';
import home from '../containers/Home/reducer';

const rootReducer = combineReducers({
    form: reducer,
    home
});

export default rootReducer;
