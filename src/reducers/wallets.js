import * as constants from '../constants/actions/wallets';

const initialState = {
    walletsList: [],
    selectedWallet: {},
    walletTransactions: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case constants.GET_WALLETS:
            return {
                ...state,
                walletsList: action.payload.walletsList
            };
        case constants.SET_SELECTED_WALLET:
            return {
                ...state,
                selectedWallet: action.payload.selectedWallet
            };
        case constants.GET_WALLET_TRANSACTIONS:
            return {
                ...state,
                walletTransactions: action.payload.walletTransactions
            };
        default:
            return state;
    }
};