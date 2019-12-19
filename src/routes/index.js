import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import WalletsPage from '../components/containers/WalletsPage';
import ImportWalletPage from '../components/containers/ImportWalletPage';
import WalletDetailsPage from '../components/containers/WalletDetailsPage';

export default () =>
    <Router>
        <Stack key="root">
            <Scene initial hideNavBar key="wallets" component={WalletsPage} />
            <Scene hideNavBar key="importWallet" component={ImportWalletPage} />
            <Scene hideNavBar key="walletDetails" component={WalletDetailsPage} />
        </Stack>
    </Router>;