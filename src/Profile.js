import React, {Component} from 'react';
import {ScrollView, AppRegistry, StyleSheet, Text, TextInput, View, ImageBackground, Button} from 'react-native';

import HeaderProfile from './HeaderProfile.js';
import Notification from './Notification.js';

export default class Profile extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HeaderProfile />
        <Notification />
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
