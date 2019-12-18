import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Icon, Container, Content, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { getWalletsIds } from '../../utils/nativeStore';
import { getWallets } from '../../actions/wallets';
import theme from '../../theme/index';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import NoContentLabel from '../UI/NoContentLabel';
import ActionSheet from '../UI/ActionSheet';
import WalletPreview from './WalletPreview';

class WalletsPage extends Component {
    state = {
        actionSheetDefs: [
            {label: 'Import wallet', value: 'IMPORT_WALLET'}
        ],
        isActionSheetVisible: false
    };

    async componentDidMount() {
        this.props.actions.getWallets(await getWalletsIds());
    }

    onActionSheetChange = value => {
        this.setState({isActionSheetVisible: false});
        if(value === 'IMPORT_WALLET')
            Actions.importWallet();
    };

    render() {
        let { isActionSheetVisible, actionSheetDefs } = this.state;
        let { wallets } = this.props;

        return (
            <Container>
                <Header title="Wallets" />
                <Content contentContainerStyle={[theme.lib.container, theme.lib.content]}>
                    {wallets.walletsList.length ?
                        wallets.walletsList.map(wallet =>
                            <WalletPreview key={wallet.address} wallet={wallet} />
                        )
                        :
                        <View style={[theme.lib.container, theme.lib.centralize]}>
                            <NoContentLabel
                                text="No wallets"
                                icon={<Icon type="SimpleLineIcons" name="wallet" />}
                            />
                        </View>
                    }
                    <ActionSheet
                        visible={isActionSheetVisible}
                        title="Choose method"
                        defs={actionSheetDefs}
                        onClose={() => this.setState({isActionSheetVisible: false})}
                        onChange={this.onActionSheetChange}
                    />
                </Content>
                <Footer style={theme.lib.centralize}>
                    <Button
                        onPress={() => this.setState({isActionSheetVisible: true})}
                        transparent
                        style={[theme.lib.centralize, theme.lib.container]}
                    >
                        <Icon
                            type="AntDesign"
                            name="plus"
                            style={[theme.lib.textSecondary, theme.lib.textLg]}
                        />
                    </Button>
                </Footer>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    wallets: state.wallets
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getWallets
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletsPage);

