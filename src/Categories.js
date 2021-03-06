import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, TouchableHighlight, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Categories extends React.Component {
  constructor(props){
    super(props);
  }
  get Categories(){
    const {categories} = this.props;
    return categories.map((category,index)=> {
      return(
        <TouchableHighlight key={index} style={styles.card} >
          <ImageBackground source={category.photo} style={styles.image}></ImageBackground>
        </TouchableHighlight>
      );
    } );
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.wrapper} horizontal = {true} showsHorizontalScrollIndicator = {false} >
        {this.Categories}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    // display: flex,
    flexDirection: 'column',
    width: 100,
    height: 100,
    marginRight: 8,
    marginLeft: 8
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
