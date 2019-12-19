import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { reset, SubmissionError } from 'redux-form';
import axios from 'axios';
import { getWalletsIds, saveWalletsIds } from '../../utils/nativeStore';
import Header from '../UI/Header';
import ImportWalletForm from './forms/ImportWalletForm';

class ImportWalletPage extends Component {
    validateWalletId = async (walletId, localWalletsIds) => {
        try {
            let response = await axios.get(`https://explorer.ark.io/api/wallets/${walletId}`);
            let wallet = response.data.data;

            if(localWalletsIds.find(id => id === walletId || [wallet.address, wallet.publicKey].includes(id)))
                return 'Wallet already added';
        } catch(e) {
            return 'Invalid address';
        }
    };

    onImportWallet = async formData => {
        let walletsIds = [...await getWalletsIds()];

        let error = await this.validateWalletId(formData.walletAddress, walletsIds);

        if(error) {
            throw new SubmissionError({
                walletAddress: error
            })
        } else {
            walletsIds.push(formData.walletAddress);
            await saveWalletsIds(walletsIds);

            this.props.dispatch(reset('ImportWalletForm'));
            Actions.wallets();
        }
    };

    render() {
        return (
            <Container>
                <Header
                    title="Import wallet"
                    hasBackBtn
                    onBackBtnPress={() => this.props.dispatch(reset('ImportWalletForm'))}
                    variant="secondary"
                />
                <ImportWalletForm onSubmit={this.onImportWallet} />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(ImportWalletPage);