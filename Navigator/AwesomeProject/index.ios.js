/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SimpleView from './navigator_simple';
import UniformView from './navigator_uniform';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      // <SimpleView/> //第一个例子
      <UniformView/>//第二个例子
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
