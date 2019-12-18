import React from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import theme from '../../theme';

export default ({title, hasBackBtn}) =>
    <Header
        androidStatusBarColor={theme.variables.colors.primary}
        style={{height: 100}}
        transparent
    >
        <Left style={theme.lib.container}>
            {hasBackBtn &&
                <Button
                    onPress={Actions.wallets}
                    transparent
                >
                    <Icon
                        type="MaterialIcons"
                        name="arrow-back"
                        style={theme.lib.textRegular}
                    />
                </Button>
            }
        </Left>
        <Body style={[{flex: 5}, theme.lib.centralize]}>
            <Title style={[theme.lib.textRegular, theme.lib.textMd]}>{title.toUpperCase()}</Title>
        </Body>
        <Right style={theme.lib.container} />
    </Header>;