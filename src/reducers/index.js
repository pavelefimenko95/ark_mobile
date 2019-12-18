import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import wallets from './wallets';

export default combineReducers({
    form: formReducer,
    wallets
});