import React from 'react';
import { Text, Icon } from 'react-native';
import theme from '../../theme';

const styles = theme.UI.NoContentLabel;

export default ({text, icon}) =>
    <>
        {React.cloneElement(icon, {style: styles.icon})}
        <Text style={styles.text}>{text}</Text>
    </>;