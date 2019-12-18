import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';
import ItemCard from '../UI/ItemCard';
import theme from '../../theme';

const styles = theme.UI.WalletPreview;

export default ({wallet}) =>
    <ItemCard style={styles.wrapper}>
        <View style={[theme.lib.directionRow, theme.lib.alignCenter, styles.balanceWrapper]}>
            <Icon
                type="FontAwesome5"
                name="money-check"
                style={theme.lib.textSecondary}
            />
            <Text
                style={[
                    theme.lib.textSecondary,
                    styles.text,
                    styles.balanceText
                ]}
            >
                {wallet.balance / Math.pow(10, 8)}
            </Text>
        </View>
        <Text numberOfLines={1} style={[theme.lib.textSecondary, styles.text]}>{wallet.address}</Text>
    </ItemCard>;