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

import Home from './Home'
import Cars from './Cars'

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Cars: {screen: Cars},
},{headerMode: 'none' });

const Navigation = createAppContainer(MainNavigator);

export default Navigation;


