import * as constants from '../constants/actions/wallets';

const initialStore = {
    walletsList: []
};

export default (store = initialStore, action) => {
    switch(action.type) {
        case constants.GET_WALLETS:
            return {
                ...store,
                walletsList: action.payload.walletsList
            };
        default:
            return store;
    }
};