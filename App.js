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

import Splash from './src/Splash'
import Navigation from './src/Stack'
import Cars from './src/Cars'

export default class App extends Component {
constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
}

componentDidMount() {
    setTimeout( () => {
        this.setTimePassed();
    },3000);
}

setTimePassed() {
    this.setState({timePassed: true});
}

render() {
    if (!this.state.timePassed) {
        return <Splash/>;
    } else {
        return <Cars/>;
    }
}
}



