import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import theme from '../../theme';

const propTypes = {
    title: PropTypes.string,
    hasBackBtn: PropTypes.bool,
    hasOptionsBtn: PropTypes.bool,
    onBackBtnPress: PropTypes.func,
    onOptionsBtnPress: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary'])
};

const CustomHeader = ({title, hasBackBtn, onBackBtnPress, hasOptionsBtn, onOptionsBtnPress, variant}) => {
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
                        onPress={() => {
                            onBackBtnPress && onBackBtnPress();
                            Actions.wallets();
                        }}
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
            <Right style={[theme.lib.container]}>
                {hasOptionsBtn &&
                    <TouchableWithoutFeedback onPress={onOptionsBtnPress}>
                        <Icon
                            type="MaterialCommunityIcons"
                            name="dots-horizontal"
                            style={[textStyle, theme.lib.textLg, {paddingRight: 5}]}
                        />
                    </TouchableWithoutFeedback>
                }
            </Right>
        </Header>
    );
};

Header.propTypes = propTypes;

export default CustomHeader;