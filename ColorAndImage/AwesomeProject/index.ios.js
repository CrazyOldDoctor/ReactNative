/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
  颜色和图片 因为刚学习什么都不懂，所以是按照官网中文文档来的
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      /* 静态图片资源*/
      /*使用混合App的图片资源*/
      /*网络图片*/
      <View style={styles.container}>
      <Image source={require('./img/我的商机_04.png')}/>

      <Image source={{uri:'image1.jpg'}} style={{width:80,height:100}}/>

      <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png'}} style={{width:100,height:100}}/>
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

        <Image source={{uri:'https://facebook.github.io/react/img/logo_og.png'}} style={{width:400,height:400}}>
        <Text style={{color:'cyan',backgroundColor:'transparent'}}>
        哈哈hahaha
        </Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',//透明色
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'darkgoldenrod'
  },
  instructions: {
    textAlign: 'center',
    color: 'forestgreen',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
