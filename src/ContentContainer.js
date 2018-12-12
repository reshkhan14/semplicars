import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import CustomImage from './CustomImage.js';

export default class ContentContainer extends Component {
  render() {
    return (
      <View style={styles.contentContainer} >
        <View style={styles.col2} >
          <CustomImage imageSource={require('./../images/shop1.jpeg')} header='Kurtis' />
        </View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/shop2.jpeg')} />
        </View>
        <View style={styles.contentBanner} >
          <CustomImage imageSource={require('./../images/shop3.jpeg')} header='Jackets' paragraph='Exclusive Winter Wears' />
        </View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/shop4.jpeg')} />
        </View>
        <View style={styles.col2} >
          <CustomImage imageSource={require('./../images/shop5.jpeg')} header='Accessories' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,

  },
  col1: {
    flex: 1,
    padding: 5
  },
  col2: {
    flex: 2,
    padding: 5
  },
  contentBanner: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  }
});
