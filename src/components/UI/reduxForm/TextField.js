import React from 'react';
import { Input, Item, Label, View, Text } from 'native-base';
import theme from '../../../theme';

export default ({input, meta: {touched, error}, placeholder, ...otherAttributes}) =>
    <View>
        <Item
            error={!!(touched && error)}
            floatingLabel
        >
            <Label>{placeholder}</Label>
            <Input
                {...input}
                {...otherAttributes}
            />
        </Item>
        <View style={[theme.lib.alignEnd, {marginTop: 3}]}>
            <Text style={theme.lib.textError}>{touched && error}</Text>
        </View>
    </View>;