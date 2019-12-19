import React from 'react';
import { View, Text, Icon } from 'native-base';
import moment from 'moment';
import theme from '../../theme';

const styles = theme.UI.Transaction;

export default ({transaction, wallet}) => {
    console.log(transaction);
    let isSender = transaction.sender === wallet.address;
    let fee = isSender ? +transaction.fee : 0;
    let amount = (+transaction.amount + fee) / Math.pow(10, 8);

    return (
        <View style={[theme.lib.directionRow, styles.wrapper]}>
            <View style={styles.destination}>
                <Text style={styles.destinationTitle}>{isSender ? 'Sent to' : 'Received from'}</Text>
                <Text
                    style={styles.destinationAddress}
                    numberOfLines={1}
                    ellipsizeMode='middle'
                >
                    {isSender ? transaction.recipient : transaction.sender}
                </Text>
            </View>
            <View style={[styles.info, theme.lib.alignEnd]}>
                <Text style={styles.amount}>{(isSender ? '-' : '+') + amount + ' ARK'}</Text>
                <Text style={styles.date}>{moment(transaction.timestamp.human).format('MMMM Do YYYY')}</Text>
            </View>
            <View style={[styles.iconWrapper, theme.lib.centralize]}>
                {isSender ?
                    <Icon
                        type="MaterialCommunityIcons"
                        name="arrow-top-right"
                        style={[theme.lib.textMd, {color: theme.variables.colors.error}]}
                    />
                    :
                    <Icon
                        type="MaterialCommunityIcons"
                        name="arrow-bottom-left"
                        style={[theme.lib.textMd, {color: theme.variables.colors.success}]}
                    />
                }
            </View>
        </View>
    );
};