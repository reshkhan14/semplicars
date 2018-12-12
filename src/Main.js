import React, {Component} from 'react';
import {ScrollView,Platform, StyleSheet, Text, TextInput, View, ImageBackground, Button} from 'react-native';

import Header from './Header.js';
import Banner from './Banner.js';
import ContentContainer from './ContentContainer.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Welcome!!!\n' +
    'This is Main Screen',
});

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main',
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <Banner />
        <ContentContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
  
});
