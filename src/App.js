import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import IndexRouter from './routes';
import theme from './theme';
import store from './store';

export default class App extends Component {
  render() {
      return(
          <Provider store={store}>
              <SafeAreaView style={theme.lib.container}>
                  <IndexRouter />
              </SafeAreaView>
          </Provider>
      );
  }
}