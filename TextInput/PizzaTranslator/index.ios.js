/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
  TextInput  处理文本输入
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
/*
export default class PizzaTranslator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
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
*/

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }
  render(){
    return(
      <View style={{padding:10}}>
        <TextInput
          style={{height:40}}
          placeholder="Type here to translate!"
          onChangeText={(text)=> this.setState({text})}
        />
        <Text style={{padding:10,fontSize:42}}>
        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('PizzaTranslator', () => PizzaTranslator);
