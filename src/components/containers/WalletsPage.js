import React, { Component } from 'react';
import { Icon, Container, Body, Title, Content, Button } from 'native-base';
import theme from '../../theme/index';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import NoContentLabel from '../UI/NoContentLabel';
import ActionSheet from '../UI/ActionSheet';

export default class WalletsPage extends Component {
    state = {
        actionSheetDefs: [
            {label: 'Import wallet', value: 'IMPORT_WALLET'}
        ],
        isActionSheetVisible: false
    };

    onActionSheetChange = value => {
        this.setState({isActionSheetVisible: false});
        alert(value);
    };

    render() {
        let { isActionSheetVisible, actionSheetDefs } = this.state;

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Wallets</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={[theme.lib.container, theme.lib.centralize]}>
                    <NoContentLabel
                        text="No wallets"
                        icon={<Icon type="SimpleLineIcons" name="wallet" />}
                    />
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
                            style={[theme.lib.textSecondaryDark, theme.lib.textLg]}
                        />
                    </Button>
                </Footer>
            </Container>
        );
    }
}

