//场景（Scene）的概念与使用
import React,{Component,PropTypes} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
/*
export default class MyScene extends Component {
  static defaultProps = {
    title:'MyScene'
  };
  render(){
    return(
      <View style={styles.container}>
        <Text>
        Hi My name is {this.props.title}.
        </Text>
      </View>
    );
  }
};
*/
//注意组件声明前面的export default关键字。它的意思是导出(export)当前组件，以允许其他组件引入(import)和使用当前组件

export default class MyScene extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    onForward:PropTypes.func.isRequired,
    onBack:PropTypes.func.isRequired,
  }
  render(){
    return(
      <View>
        <Text>
        Current Scene:{this.props.title}
        </Text>
        <TouchableHighlight onPress = {this.props.onForward}>
          <Text>
          点我进入下一场景
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>
          点我返回上一场景
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
//在这个例子中，MyScene通过title属性接受了路由对象中的title值。它还包含了两个可点击的组件TouchableHighlight，会在点击时分别调用通过props传入的onForward和onBack方法，而这两个方法各自调用了navigator.push()和navigator.pop()，从而实现了场景的变化。
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });style={styles.container}
//自己添加的样式，为了好看
