import React from 'react';
import { Dimensions, View, ActivityIndicator, Text } from 'react-native';
import theme from '../../theme';

const styles = theme.UI.OverlaySpinner;

export default () =>
    <View style={styles.wrapper}>
        <ActivityIndicator size="large" color={theme.variables.colors.secondary} />
    </View>;