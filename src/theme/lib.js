import { StyleSheet } from 'react-native';
import variables from './variables';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    centralize: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSecondary: {
        color: variables.colors.secondary,
        fontSize: 16
    },
    textSecondaryDark: {
        color: variables.colors.secondaryDark,
        fontSize: 16
    },
    textGreyed: {
        color: variables.colors.greyed,
        fontSize: 16
    },
    textLg: {
        fontSize: 23
    }
});