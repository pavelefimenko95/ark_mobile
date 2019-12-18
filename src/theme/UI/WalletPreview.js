import { StyleSheet } from 'react-native';
import variables from '../variables';

export default StyleSheet.create({
    wrapper: {
        marginBottom: 20,
        backgroundColor: variables.colors.primary
    },
    text: {
        fontSize: 16
    },
    balanceWrapper: {
        marginBottom: 8
    },
    balanceText: {
        fontSize: 18,
        marginLeft: 15
    }
});