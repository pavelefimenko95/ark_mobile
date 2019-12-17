import React from 'react';
import { Footer } from 'native-base';
import theme from '../../theme';

const styles = theme.UI.Footer;
export default ({children, style}) =>
    <Footer style={[styles.wrapper, (style ? style : {})]}>
        {children}
    </Footer>;