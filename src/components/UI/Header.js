import React from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import theme from '../../theme';

export default ({title, hasBackBtn}) =>
    <Header
        androidStatusBarColor={theme.variables.colors.primary}
        style={{backgroundColor: theme.variables.colors.primary}}
    >
        <Left style={theme.lib.container}>
            {hasBackBtn &&
                <Button
                    onPress={Actions.wallets}
                    transparent
                >
                    <Icon type="MaterialIcons" name="arrow-back" />
                </Button>
            }
        </Left>
        <Body style={[theme.lib.container, theme.lib.centralize]}>
            <Title>{title}</Title>
        </Body>
        <Right style={theme.lib.container} />
    </Header>;