import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { View, Container, Content, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { getWalletTransactions } from '../../actions/wallets';
import Header from '../UI/Header';
import ActionSheet from '../UI/ActionSheet';
import Transaction from '../containers/Transaction';
import theme from '../../theme';
import { getWalletsIds, saveWalletsIds } from '../../utils/nativeStore';

const propTypes = {
    actions: PropTypes.objectOf(PropTypes.func),
    wallets: PropTypes.object
};

const styles = theme.UI.WalletDetailsPage;

class WalletDetailsPage extends Component {
    state = {
        isActionSheetVisible: false,
        actionSheetDefs: [
            {label: 'Delete wallet', value: 'DELETE_WALLET'}
        ],
        isRefreshing: false
    };

    componentDidMount() {
        this.getTransactions(true);
    }

    getTransactions(isPending) {
        let { actions, wallets } = this.props;
        actions.getWalletTransactions(wallets.selectedWallet.publicKey, isPending);
    }

    async onRefresh() {
        this.setState({isRefreshing: true});
        await this.getTransactions();
        this.setState({isRefreshing: false});
    }

    onActionSheetChange = async value => {
        this.setState({isActionSheetVisible: false});
        if(value === 'DELETE_WALLET') {
            let { publicKey, address } = this.props.wallets.selectedWallet;

            let walletsIds = await getWalletsIds();
            await saveWalletsIds(walletsIds.filter(id => id !== publicKey && id !== address));
            Actions.wallets();
        }
    };

    render() {
        let { actionSheetDefs, isActionSheetVisible, isRefreshing } = this.state;
        let { wallets } = this.props;

        return (
            <Container>
                <Header
                    title="MY WALLET"
                    hasBackBtn
                    hasOptionsBtn
                    onOptionsBtnPress={() => this.setState({isActionSheetVisible: true})}
                    variant="primary"
                />
                <Content
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }
                >
                    <View style={[theme.lib.alignCenter, styles.detailsWrapper]}>
                        <View style={[theme.lib.directionRow, theme.lib.alignCenter, styles.balanceWrapper]}>
                            <Icon
                                type="FontAwesome5"
                                name="money-check"
                                style={theme.lib.textSecondary}
                            />
                            <Text style={[theme.lib.textSecondary, theme.lib.textMd, styles.balance]}>
                                {wallets.selectedWallet.balance / Math.pow(10, 8)}
                            </Text>
                        </View>
                        <Text style={theme.lib.textSecondary}>
                            {wallets.selectedWallet.address}
                        </Text>
                    </View>
                    <View style={theme.lib.content}>
                        {wallets.pendingState.getWalletTransactions ?
                            <ActivityIndicator
                                size="large"
                                color={theme.variables.colors.primary}
                                style={{marginTop: 20}}
                            />
                            :
                            [...wallets.walletTransactions].reverse().map(transaction =>
                                <Transaction
                                    transaction={transaction}
                                    wallet={wallets.selectedWallet}
                                    key={transaction.id}
                                />
                            )
                        }
                    </View>
                    <ActionSheet
                        visible={isActionSheetVisible}
                        title="Choose option"
                        defs={actionSheetDefs}
                        onClose={() => this.setState({isActionSheetVisible: false})}
                        onChange={this.onActionSheetChange}
                    />
                </Content>
            </Container>
        );
    }
}

WalletDetailsPage.propTypes = propTypes;

const mapStateToProps = state => ({
    wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getWalletTransactions
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletDetailsPage);