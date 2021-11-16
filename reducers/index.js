import sponsoredProviders from './sponsoredProviders';
import signup from './signup';
import user from './user';
// import { reducer } from './details'

import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    sponsoredProviders, signup, user
});


export default rootReducers;