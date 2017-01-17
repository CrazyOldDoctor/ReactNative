/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*
  使用导航器跳转页面
*/
import React, { Component } from 'react';
// ./MyScene表示的是当前目录下的MyScene.js文件，也就是我们刚刚创建的文件
// 注意即便当前文件和MyScene.js在同一个目录中，"./"两个符号也是不能省略的！
// 但是.js后缀是可以省略的
import MyScene from './MyScene';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

//使用Navigator
/*
class YoDawgApp extends Component {
  render() {
    return(
         <MyScene/>
    );
  }
};
AppRegistry.registerComponent('SimpleNavigationApp', () => YoDawgApp);
*/

//1.首先要做的是渲染一个Navigator组件，然后通过此组件的renderScene属性方法来渲染其他场景。
//2.使用导航器经常会碰到“路由(route)”的概念。“路由”抽象自现实生活中的路牌，在RN中专指包含了场景信息的对象。renderScene方法是完全根据路由提供的信息来渲染场景的。你可以在路由中任意自定义参数以区分标记不同的场景，我们在这里仅仅使用title作为演示。
class SimpleNavigationApp extends Component {
  render() {
    return(
      <Navigator
        initialRoute={{title:'My Initial Scene',index:0}}
        renderScene={(route,navigator) =>
          <MyScene
            title={route.title}
// Function to call when a new scene should be displayed
            onForward={ () => {
              const nextIndex = route.index + 1;
              navigator.push({
                title:'Scene' + nextIndex,
                index:nextIndex,
              });
            }}
// Function to call to go back to the previous scene
            onBack={() => {
              if (route.index>0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}
//3.要过渡到新的场景，你需要了解push和pop方法。这两个方法由navigator对象提供，而这个对象就是上面的renderScene方法中传递的第二个参数。 我们使用这两个方法来把路由对象推入或弹出导航栈。
 AppRegistry.registerComponent('SimpleNavigationApp', () => SimpleNavigationApp);
