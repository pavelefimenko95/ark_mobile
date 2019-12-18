import React from 'react';
import { Input, Item, Label } from 'native-base';

export default ({input, meta: {touched, error}, placeholder, ...otherAttributes}) =>
    <Item
        error={!!(touched && error)}
        floatingLabel
    >
        <Label>{placeholder}</Label>
        <Input
            {...input}
            {...otherAttributes}
        />
    </Item>;