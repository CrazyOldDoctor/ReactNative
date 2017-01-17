/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* ScrollView*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
/*
export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
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
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    return(
      <ScrollView>
        <Text style={{fontSize:96}}>
        Scroll me plz
        </Text>
        <Image source={require('./img/feng1.jpg')}/>
        <Image source={require('./img/feng2.jpg')}/>
        <Image source={require('./img/feng3.jpg')}/>
        <Image source={require('./img/feng4.jpg')}/>
        <Image source={require('./img/feng5.jpg')}/>
        <Image source={require('./img/feng6.jpg')}/>

        <Text style={{fontSize:76}}>
        If you like
        </Text>
        <Image source={require('./img/feng1.jpg')}/>
        <Image source={require('./img/feng2.jpg')}/>
        <Image source={require('./img/feng3.jpg')}/>
        <Image source={require('./img/feng4.jpg')}/>
        <Image source={require('./img/feng5.jpg')}/>
        <Image source={require('./img/feng6.jpg')}/>

        <Text style={{fontSize:56}}>
        Scrolling down
        </Text>
        <Image source={require('./img/feng1.jpg')}/>
        <Image source={require('./img/feng2.jpg')}/>
        <Image source={require('./img/feng3.jpg')}/>
        <Image source={require('./img/feng4.jpg')}/>
        <Image source={require('./img/feng5.jpg')}/>
        <Image source={require('./img/feng6.jpg')}/>

        <Text style={{fontSize:36}}>
        What‘s the best
        </Text>
        <Image source={require('./img/feng1.jpg')}/>
        <Image source={require('./img/feng2.jpg')}/>
        <Image source={require('./img/feng3.jpg')}/>
        <Image source={require('./img/feng4.jpg')}/>
        <Image source={require('./img/feng5.jpg')}/>
        <Image source={require('./img/feng6.jpg')}/>

        <Text style={{fontSize:16}}>
        Framework around?
        </Text>
        <Image source={require('./img/feng1.jpg')}/>
        <Image source={require('./img/feng2.jpg')}/>
        <Image source={require('./img/feng3.jpg')}/>
        <Image source={require('./img/feng4.jpg')}/>
        <Image source={require('./img/feng5.jpg')}/>
        <Image source={require('./img/feng6.jpg')}/>

        <Text style={{fontSize:80}}>
        React Native
        </Text>
      </ScrollView>
    );
  }
}
// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('IScrolledDownAndWhatHappenedNextShockedMe', () => IScrolledDownAndWhatHappenedNextShockedMe);
