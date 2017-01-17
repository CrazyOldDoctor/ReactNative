/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* style 样式
style属性可以是一个普通的JavaScript对象。这是最简单的用法，因而在示例代码中很常见。你还可以传入一个数组——在数组中位置居后的样式对象比居前的优先级更高，这样你可以间接实现样式的继承。
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class LotsOfStyles extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.red}>
          just red
        </Text>
        <Text style={styles.bigblue}>
        just bigblue
        </Text>
        <Text style={[styles.bigblue,styles.red]}>
        bigblue, then red
        </Text>
        <Text style={[styles.red,styles.bigblue]}>
        red, then bigblue
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30,
  },
  red:{
    color:'red',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});


AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);
