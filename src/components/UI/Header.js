import React from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import theme from '../../theme';

export default ({title, hasBackBtn, variant}) => {
    let textStyle = variant === 'primary' ? theme.lib.textSecondary : theme.lib.textRegular;

    return (
        <Header
            androidStatusBarColor={theme.variables.colors.primary}
            style={[{height: 100}, (variant === 'primary' ? {backgroundColor: theme.variables.colors.primary} : {})]}
            transparent={variant === 'secondary'}
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
                            style={[textStyle, theme.lib.textLg]}
                        />
                    </Button>
                }
            </Left>
            <Body style={[{flex: 5}, theme.lib.centralize]}>
                <Title style={[textStyle, theme.lib.textMd]}>{title.toUpperCase()}</Title>
            </Body>
            <Right style={theme.lib.container} />
        </Header>
    );
};