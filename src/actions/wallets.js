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