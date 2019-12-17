import { StyleSheet, Dimensions } from 'react-native';
import variables from '../variables';


export default StyleSheet.create({
    outerWrapper: {
        flex: 1,
        position: 'relative',
        justifyContent: 'flex-end',
        padding: 20
    },
    modalBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: variables.colors.modalBackground
    },
    innerWrapper: {

    },
    content: {
        borderRadius: 15,
        overflow: 'hidden',
        opacity: .88
    },
    title: {
        backgroundColor: variables.colors.secondary,
        paddingTop: 15,
        paddingBottom: 5,
        color: '#9D9E9E',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    item: {
        backgroundColor: variables.colors.secondary,
        paddingVertical: 18,
        color: variables.colors.primary,
        textAlign: 'center',
        fontSize: 18
    },
    item_selected: {
        marginBottom: 1
    },
    item_cancel: {
        backgroundColor: variables.colors.secondary,
        fontWeight: 'bold'
    },
    footer: {
        borderRadius: 15,
        overflow: 'hidden',
        marginTop: 10,
        opacity: .95
    }
});