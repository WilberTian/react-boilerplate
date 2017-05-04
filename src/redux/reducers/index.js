import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import contactReducer from './contactReducer';

const rootReducer = combineReducers({
    contactReducer,
    routing: routerReducer
});

export default rootReducer;
