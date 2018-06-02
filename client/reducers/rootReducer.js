import  { CLEAR_STORE } from '../actions/constants';

import { combineReducers } from 'redux';

const appReducer =  combineReducers({
    // Reducers
});

export default (state, action) => {
    if(action.type === CLEAR_STORE) { // Clear store
        state = undefined;
    };
    return appReducer(state, action);
};