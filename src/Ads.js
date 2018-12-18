import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

import CustomImage from './CustomImage.js';

export default class ContentContainer extends Component {
  render() {
    return (
      <View style={styles.contentContainer} >
        <View style={styles.col2} >
          <CustomImage imageSource={require('./../images/comad4.jpeg')} />
        </View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/comad2.jpeg')} />
        </View>
        <View style={styles.contentBanner} ></View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/comad3.jpeg')} />
        </View>
        <View style={styles.col2} >
          <CustomImage imageSource={require('./../images/comad1.jpeg')} />
        </View>
        <View style={styles.contentBanner} ></View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/comad5.jpeg')} />
        </View>
        <View style={styles.col2} >
          <CustomImage imageSource={require('./../images/comad6.jpeg')} />
        </View>
        <View style={styles.contentBanner} ></View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/comad7.jpeg')} />
        </View>
        <View style={styles.col2} >
          <CustomImage imageSource={require('./../images/comad8.jpeg')} />
        </View>
        <View style={styles.contentBanner} ></View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/comad9.jpeg')} />
        </View>
        <View style={styles.col2} >
          <CustomImage imageSource={require('./../images/comad10.jpeg')} />
        </View>
        <View style={styles.contentBanner} ></View>
        <View style={styles.col1} >
          <CustomImage imageSource={require('./../images/comad11.jpeg')} />
        </View>
        <View style={styles.col2} ></View>
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
    flex: 2,
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
    // padding: 5
  }
});
