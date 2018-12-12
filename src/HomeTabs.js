import React, {Component} from 'react';
import {Icon, Button, Text, View, StyleSheet, Dimensions} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
 
const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
 
export default class HomeTabs extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
    headerVisible: false,
  }
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Commercial Ads' },
      { key: 'second', title: 'Notification' },
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })} />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});