import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, TouchableHighlight, View} from 'react-native';

export default class Second extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.largeText} >
          Details Page
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
    backgroundColor: '#dddfd4'
  },
  largeText: {
    flex: 1,
    fontSize: 52,
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#173e43'
  }
});
