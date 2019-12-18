import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    contentWrapper: {
        paddingTop: 20
    },
    imageWrapper: {
        minHeight: 300
    },
    image: {
        height: Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width / 2
    }
});