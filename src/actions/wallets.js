import axios from 'axios';
import * as constants from '../constants/actions/wallets';

export const getWallets = walletsIds => async dispatch => {
    try {
        let walletsList = await Promise.all(walletsIds.map(async walletId => {
            let response = await axios.get(`https://explorer.ark.io/api/wallets/${walletId}`);
            return response.data.data;
        }));

        dispatch({
            type: constants.GET_WALLETS,
            payload: {
                walletsList
            }
        });
    } catch(e) {
        console.log(e);
    }
};

export const setSelectedWallet = selectedWallet => ({
    type: constants.SET_SELECTED_WALLET,
    payload: {
        selectedWallet
    }
});

export const getWalletTransactions = walletId => async dispatch => {
    try {
        let response = await axios.get(`https://explorer.ark.io/api/wallets/${walletId}/transactions`);

        dispatch({
            type: constants.GET_WALLET_TRANSACTIONS,
            payload: {
                walletTransactions: response.data.data
            }
        });
    } catch (e) {
        console.log(e);
    }
};