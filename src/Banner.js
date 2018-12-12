import React, {Component} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import ImageOverlay from './ImageOverlay.js';

export default class Banner extends Component {
  render() {
    return (
      <ImageBackground source={require('./../images/banner.jpeg')} style={styles.banner}>
        <ImageOverlay header='-React Native-' paragraph='-e-commerce-' />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
