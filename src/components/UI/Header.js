import React from 'react';
import { Header } from 'native-base';
import theme from '../../theme';

export default ({children}) =>
    <Header
        noLeft
        androidStatusBarColor={theme.variables.colors.primary}
        style={{backgroundColor: theme.variables.colors.primary}}
    >
        {children}
    </Header>;