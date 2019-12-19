import { Dimensions, StyleSheet } from 'react-native';
import variables from '../variables';


export default StyleSheet.create({
    wrapper: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 99999,
        opacity: .6,
        backgroundColor: variables.colors.modalBackground
    }
});