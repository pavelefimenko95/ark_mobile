import React, { Component } from 'react';
import { Header, Icon, Container, Body, Title, Content, Footer } from 'native-base';
import theme from '../../theme/index';
import NoContentLabel from '../UI/NoContentLabel';

export default class WalletsPage extends Component {
    render() {
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
                </Content>
                <Footer></Footer>
            </Container>
        );
    }
}

