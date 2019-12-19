import axios from 'axios';
import * as constants from '../constants/actions/wallets';

const pendingAction = (isPending, funcName) => ({
    type: isPending ? constants.WALLETS_REQUEST_PENDING : constants.WALLETS_REQUEST_FULFILLED,
    payload: {
        funcName
    }
});

export const getWallets = walletsIds => async dispatch => {
    const funcName = getWallets.name;

    try {
        dispatch(pendingAction(true, funcName));
        let walletsList = await Promise.all(walletsIds.map(async walletId => {
            let response = await axios.get(`https://explorer.ark.io/api/wallets/${walletId}`);
            return response.data.data;
        }));

        dispatch(pendingAction(false, funcName));
        dispatch({
            type: constants.GET_WALLETS,
            payload: {
                walletsList
            }
        });
    } catch(e) {
        dispatch(pendingAction(false, funcName));
        console.log(e);
    }
};

export const setSelectedWallet = selectedWallet => ({
    type: constants.SET_SELECTED_WALLET,
    payload: {
        selectedWallet
    }
});

export const getWalletTransactions = (walletId, isPending) => async dispatch => {
    const funcName = getWalletTransactions.name;

    try {
        isPending && dispatch(pendingAction(true, funcName));
        let response = await axios.get(`https://explorer.ark.io/api/wallets/${walletId}/transactions`);

        dispatch({
            type: constants.GET_WALLET_TRANSACTIONS,
            payload: {
                walletTransactions: response.data.data
            }
        });
        isPending && dispatch(pendingAction(false, funcName));
    } catch (e) {
        isPending && dispatch(pendingAction(false, funcName));
        console.log(e);
    }
};

export const resetWalletDetails = () => ({
    type: constants.RESET_WALLET_DETAILS
});