import * as constants from '../constants/actions/wallets';

const initialState = {
    walletsList: [],
    selectedWallet: {},
    walletTransactions: [],
    pendingState: {
        getWallets: false,
        getWalletTransactions: false
    }
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
        case constants.RESET_WALLET_DETAILS:
            return {
                ...state,
                selectedWallet: {},
                walletTransactions: []
            };
        case constants.WALLETS_REQUEST_PENDING:
            return {
                ...state,
                pendingState: {
                    ...state.pendingState,
                    [action.payload.funcName]: true
                }
            };
        case constants.WALLETS_REQUEST_FULFILLED:
            return {
                ...state,
                pendingState: {
                    ...state.pendingState,
                    [action.payload.funcName]: false
                }
            };
        default:
            return state;
    }
};