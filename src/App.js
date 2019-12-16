import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import IndexRouter from './routes';
import theme from './theme';

export default class App extends Component {
  render() {
      return(
          <SafeAreaView style={theme.lib.container}>
              <IndexRouter />
          </SafeAreaView>
      );
  }
}