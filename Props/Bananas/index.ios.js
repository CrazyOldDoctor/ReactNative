/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
      <Image source={pic} style={{width:193,height:110}}/>
      /*1.请注意{pic}外围有一层括号，我们需要用括号来把pic这个变量嵌入到JSX语句中。括号的意思是括号内部为一个js变量或表达式，需要执行后取值。因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中。
      2.source和style 为属性
      */
    );
  }
}
//自定义组件也可以使用props
class Greeting extends Component {
  render() {
    return(
      <Text>
      Hello {this.props.name}!
      </Text>
    );
  }
}
class LotsOfGreetings extends Component {
  render() {
    return(
      <View style={{alignItems:'center',justifyContent: 'center',flex:1}}>
        <Greeting name='Rexxar'/>
        <Greeting name='Jaina'/>
        <Greeting name='Valeera'/>
      </View>
    );
  }
}

// 注意，这里用引号括起来的'Bananas'必须和你init创建的项目名一致, =>后面跟的是你需要展示identities类名
AppRegistry.registerComponent('Bananas', () => LotsOfGreetings);
// AppRegistry.registerComponent('Bananas', () => Bananas);
