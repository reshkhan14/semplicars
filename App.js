/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView,Platform, StyleSheet, Text, TextInput, View, ImageBackground} from 'react-native';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './src/Home'
import Main from './src/Main'
import Cars from './src/Cars'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Main: {screen: Main},
  Cars: {screen: Cars},
});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;


