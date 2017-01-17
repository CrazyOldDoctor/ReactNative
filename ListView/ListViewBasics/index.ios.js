/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* ListView
ListView组件必须的两个属性是dataSource和renderRow。dataSource是列表的数据源，而renderRow则逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染。
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';
/*
export default class ListViewBasics extends Component {
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
/*
rowHasChanged函数也是ListView的必需属性。这里我们只是简单的比较两行数据是否是同一个数据（===符号只比较基本类型数据的值，和引用类型的地址）来判断某行数据是否变化了。
*/
class ListViewBasics extends Component {
  //初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1 !== r2
    });
    this.state = {
      dataSource:ds.cloneWithRows(['John','Joel','James','Jimmy','Jackson','Jillian','Julie','Devin'])
    };
  }
  render(){
    return(
      <View style={{flex:1,paddingTop:22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}
// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ListViewBasics', () => ListViewBasics);
