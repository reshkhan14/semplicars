import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.wrapper} >
      <View style={styles.searchContainer} >
        <Icon name="ios-search" size={20} color="#919191" style={styles.searchIcon}  />
        <Text style={styles.textInput} >Search in Category</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    // backgroundColor: 'rgba(255,255,255,0.9)',
    backgroundColor: '#eeeef1',
    width: '100%',
    height: 80,
    marginBottom: 20
  },
  searchContainer: {
    display: 'flex',
    borderWidth: 1,
    borderColor: '#b3b3b3',
    // backgroundColor: '#fff',
    backgroundColor: '#eeeef1',
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: { width: 0, height:5 },
    shadowOpacity: 0.7,
    shadowRadius: 12,
    borderRadius: 3,
    height: 41,
    marginTop: 28,
    marginLeft: 20,
    marginRight: 20
  },
  searchIcon: {
    position: 'absolute',
    left: 18,
    top: 9,
  },
  textInput: {
    display: 'flex',
    marginTop: 10,
    marginLeft: 45,
    color: '#b3b3b3'
  }
});
