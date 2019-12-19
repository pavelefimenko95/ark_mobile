import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import { View, Icon, Container, Content, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { getWalletsIds } from '../../utils/nativeStore';
import { getWallets, setSelectedWallet } from '../../actions/wallets';
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

    onWalletPress = wallet => {
        this.props.actions.setSelectedWallet(wallet);
        Actions.walletDetails();
    };

    render() {
        let { isActionSheetVisible, actionSheetDefs } = this.state;
        let { wallets } = this.props;

        return (
            <Container>
                <Header title="Wallets" variant="secondary" />
                <Content contentContainerStyle={[theme.lib.container, theme.lib.content]}>
                    {wallets.walletsList.length ?
                        wallets.walletsList.map(wallet =>
                            <TouchableOpacity
                                onPress={() => this.onWalletPress(wallet)}
                                key={wallet.address}
                            >
                                <WalletPreview wallet={wallet} />
                            </TouchableOpacity>
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
        getWallets,
        setSelectedWallet
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletsPage);

