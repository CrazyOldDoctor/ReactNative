/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
网络 这一章仅仅是按着官方中文文档敲了一遍，有的地方可能报错，看一下结构和逻辑，方便以后应用就可以了，不哟啊辣么死板
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//使用Fetch
//发起网络请求
fetch('https://mywebsite.com/mydata.json')
//Fetch还有可选的第二个参数，可以用来定制HTTP请求一些参数。你可以指定header参数，或是指定使用POST方法，又或是提交数据等等：
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
//如果你的服务器无法识别上面POST的数据格式，那么可以尝试传统的form格式，示例如下：
fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'key1=value1&key2=value2'
})
// //处理服务器的响应数据
// getMoviesFromApiAsync(){
//   return fetch('http://facebook.github.io/react-native/movies.json')
//     .then((response) => response.json())
//     .then((responseJson)=>{
//       return responseJson.movies;
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }
//你也可以在React Native应用中使用ES7标准中的async/await 语法：
// 注意这个方法前面有async关键字
//别忘了catch住fetch可能抛出的异常，否则出错时你可能看不到任何提示。
// async getMoviesFromApiAsync(){
//     try {
//        // 注意这里的await语句，其所在的函数必须有async关键字声明
//        let response = await fetch('http://facebook.github.io/react-native/movies.json');
//        let responseJson = await response.json();
//        return responseJson.movies;
//     } catch (error) {
//       console.error(error);
//     } finally {
//
//     }
// }

//使用其他网络库 XMLHttpRequest
//React Native中已经内置了XMLHttpRequest API(也就是俗称的ajax)。一些基于XMLHttpRequest封装的第三方库也可以使用，例如frisbee或是axios等。但注意不能使用jQuery，因为jQuery中还使用了很多浏览器中才有而RN中没有的东西
var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }
  if (request.status === 200) {
    console.log('success',request.responseText);
  }else {
    console.warn('error');
  }
};
request.open('GET','https://mywebsite.com/endpoint/')
request.send();

// //WebScoket 支持
// var ws = new WebScoket('ws://host.com/path');
// ws.onopen = () => {
//   //打开一个连接
//   ws.send('something');//发送一个消息
// };
// ws.onmessage = (e) => {
//   //接收到了一个消息
//   console.log(e.data);
// };
// ws.onerror = (e) => {
//   //发生了一个错误
//   console.log(e.message);
// };
// ws.onclose = (e) => {
//   //连接被关闭了
//   console.log(e.code,e.reason);
// };



export default class AwesomeProject extends Component {
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
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
