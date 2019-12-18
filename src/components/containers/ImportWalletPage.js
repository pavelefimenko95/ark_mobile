import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { reset } from 'redux-form';
import Header from '../UI/Header';
import ImportWalletForm from './forms/ImportWalletForm';

class ImportWalletPage extends Component {
    onImportWallet = formData => {
        alert(JSON.stringify(formData));
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