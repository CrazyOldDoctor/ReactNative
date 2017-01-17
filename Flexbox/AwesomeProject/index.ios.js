/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 /*
  使用flexbox布局
  一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求。
  React Native中的Flexbox的工作原理和web上的CSS基本一致，当然也存在少许差异。首先是默认值不同：flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Flex Direction
//在组件的style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。

class FlexDirectionBasics extends Component {
  render() {
    return(
      //尝试把‘flexDirection’改为‘column’看看
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}


//Justify Content
//在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
class JustifyContentBasics extends Component {
  render() {
    return(
      // 尝试把`justifyContent`改为`center`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{flex:1,flexDirection:'column',justifyContent:'space-between'}}>
        <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
        <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
      </View>
    );
  }
}

//Align Items
//1.在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
//2.注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
class AlignItemsBasics extends Component {
  render() {
    return(
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}



AppRegistry.registerComponent('AwesomeProject', () => AlignItemsBasics);
