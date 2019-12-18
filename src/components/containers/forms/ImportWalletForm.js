import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Animated } from 'react-native';
import { Content, Button, Text } from 'native-base';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import Footer from '../../UI/Footer';
import TextField from '../../UI/reduxForm/TextField';
import theme from '../../../theme';

const styles = theme.UI.ImportWalletForm;

const validate = ({walletAddress}) => {
    let errors = {};

    if(!walletAddress)
        errors.walletAddress = 'Required';

    return errors;
};

class ImportWalletForm extends Component {
    state = {
        animatedOpacity: new Animated.Value(.2)
    };

    componentDidUpdate(prevProps) {
        let currentWalletAddress = this.props.formValues.walletAddress;
        if(!prevProps.formValues.walletAddress && currentWalletAddress)
            this.animateOpacity(true);

        if(prevProps.formValues.walletAddress && !currentWalletAddress)
            this.animateOpacity(false);
    }

    animateOpacity = isEnable =>
        Animated.timing(this.state.animatedOpacity, {
            duration: 500,
            toValue: isEnable ? .7 : .2
        }).start();

    render() {
        let { animatedOpacity } = this.state;
        let { handleSubmit } = this.props;

        return (
            <>
                <Content
                    contentContainerStyle={[
                        theme.lib.container,
                        theme.lib.content,
                        styles.contentWrapper
                    ]}
                >
                    <Field
                        name="walletAddress"
                        component={TextField}
                        placeholder="Enter wallet address"
                    />
                    <View
                        style={[
                            theme.lib.container,
                            theme.lib.centralize,
                            styles.imageWrapper
                        ]}
                    >
                        <Animated.Image
                            source={require('../../../assets/images/import-wallet4.png')}
                            style={[styles.image, {opacity: animatedOpacity}]}
                            resizeMode="contain"
                        />
                    </View>
                </Content>
                <Footer style={theme.lib.centralize}>
                    <Button
                        onPress={handleSubmit}
                        transparent
                        style={[theme.lib.centralize, theme.lib.container]}
                    >
                        <Text style={theme.lib.textSecondary}>Import</Text>
                    </Button>
                </Footer>
            </>
        );
    }
}

const valueSelector = formValueSelector('ImportWalletForm');

const mapStateToProps = state => ({
    formValues: {
        walletAddress: valueSelector(state, 'walletAddress')
    }
});

export default connect(mapStateToProps, null)(reduxForm({
    form: 'ImportWalletForm',
    validate
})(ImportWalletForm));