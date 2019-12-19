import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Container, Content, Text, Icon } from 'native-base';
import { getWalletTransactions } from '../../actions/wallets';
import Header from '../UI/Header';
import Transaction from '../containers/Transaction';
import theme from '../../theme';

const styles = theme.UI.WalletDetailsPage;

class WalletDetailsPage extends Component {
    componentDidMount() {
        let { actions, wallets } = this.props;
        actions.getWalletTransactions(wallets.selectedWallet.publicKey);
    }

    render() {
        let { wallets } = this.props;

        return (
            <Container>
                <Header title="MY WALLET" hasBackBtn variant="primary" />
                <Content>
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
                        {[...wallets.walletTransactions].reverse().map(transaction =>
                            <Transaction
                                transaction={transaction}
                                wallet={wallets.selectedWallet}
                                key={transaction.id}
                            />
                        )}
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getWalletTransactions
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletDetailsPage);