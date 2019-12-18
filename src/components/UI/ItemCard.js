import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'native-base';
import theme from '../../theme';

const styles = theme.UI.ItemCard;

export default ({children, style}) =>
    <Card style={[styles.wrapper, (style ? style : {})]}>
        {children}
    </Card>