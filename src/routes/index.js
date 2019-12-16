import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import WalletsPage from '../components/containers/WalletsPage';

export default () =>
    <Router>
        <Stack key="root">
            <Scene initial hideNavBar key="wallets" component={WalletsPage} />
        </Stack>
    </Router>;