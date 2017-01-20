
import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ActivityIndicator,
  Text
} from 'react-native';
const TimerMixin = require('react-timer-mixin');

const ToggleAnimatingActivityIndicator = React.createClass({
  mixins: [TimerMixin],

  getInitialState() {
    return {
      animating: true,
    };
  },

  setToggleTimeout() {
    this.setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  },

  componentDidMount() {
    this.setToggleTimeout();
  },

  render() {
    return (
      <View style={{flex:1}}>
        <View style={[styles.viewStyle,styles.beige]}>
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, {height: 60}]}
            size="large"
          />
        </View>

        <View style={[styles.viewStyle,styles.lavender]}>
          <ActivityIndicator
            style={[styles.centering,styles.gray]}
            color='white'
          />
        </View>

        <View style={[styles.viewStyle,styles.beige]}>
          <ActivityIndicator
            style={[styles.centering]}
          />
          <ActivityIndicator
            style={[styles.centering, {backgroundColor: '#eeeeee'}]}
          />
        </View>

        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>

        <View>
          <ActivityIndicator
            style={[styles.centering, styles.gray]}
            color="white"
            size="large"
          />
        </View>

        <View style={styles.horizontal}>
          <ActivityIndicator
            size="large"
            color="#0000ff"
          />
          <ActivityIndicator
            size="large"
            color="#aa00aa"
          />
          <ActivityIndicator
            size="large"
            color="#aa3300"
          />
          <ActivityIndicator
            size="large"
            color="#00aa00"
          />
        </View>

        <View style={[styles.viewStyle,styles.beige]}>
          <ActivityIndicator
            style={[styles.centering, {transform: [{scale: 1.5}]}]}
            size="large"
          />
        </View>

      </View>

    );
  }
});

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
  viewStyle: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  beige: {
    backgroundColor: 'beige'
  },
  lavender: {
    backgroundColor: 'lavender'
  }
});
AppRegistry.registerComponent('ActivityIndicatorDemo',() => ToggleAnimatingActivityIndicator);
