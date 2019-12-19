import { StyleSheet } from 'react-native';
import variables from '../variables';

export default StyleSheet.create({
    wrapper: {
        paddingBottom: 10,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: variables.colors.secondaryDarken
    },
    destination: {
        flex: 5
    },
    destinationTitle: {
        fontSize: 13,
        marginBottom: 4
    },
    destinationAddress: {
        fontSize: 14
    },
    info: {
        flex: 10,
    },
    amount: {
        fontSize: 14,
        marginBottom: 4
    },
    date: {
        fontSize: 13,
        color: variables.colors.greyed
    },
    iconWrapper: {
        flex: 2
    }
});