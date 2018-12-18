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

import Category from './Category'
import Second from './Second'

const MainNavigator = createStackNavigator({
  Category: {screen: Category},
  Second: {screen: Second},
},{headerMode: 'none' });

const navigation = createAppContainer(MainNavigator);

export default navigation;


