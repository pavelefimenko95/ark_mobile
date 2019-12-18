import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { reset } from 'redux-form';
import { getWalletsIds, saveWalletsIds } from '../../utils/nativeStore';
import Header from '../UI/Header';
import ImportWalletForm from './forms/ImportWalletForm';

class ImportWalletPage extends Component {
    onImportWallet = async formData => {
        let wallets = [...await getWalletsIds()];
        wallets.push(formData.walletAddress);
        await saveWalletsIds(wallets);

        this.props.dispatch(reset('ImportWalletForm'));
        Actions.wallets();
    };

    render() {
        return (
            <Container>
                <Header title="Import wallet" hasBackBtn />
                <ImportWalletForm onSubmit={this.onImportWallet} />
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(null, mapDispatchToProps)(ImportWalletPage);