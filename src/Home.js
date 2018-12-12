
import React, {Component} from 'react';
import {ScrollView,Platform, StyleSheet, Text, TextInput, View, ImageBackground, Button} from 'react-native';

import {createStackNavigator} from 'react-navigation';


type Props = {};
export default class Home extends Component<Props> {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
    this.state = { text: 'Username' };
    this.state1 = { text: 'Password' };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={require('./../images/car-bg.jpeg')} style={styles.container}>
      <View style={styles.inner}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.car}><Button title="CARS LOGIN" color="red" raised={true} onPress={()=>navigate('Cars')} /></View>
        <View style={styles.login}><Button title="LOGIN" color="green" raised={true} onPress={()=>navigate('Main')} /></View>
      </ScrollView>
        
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    
  },
  inner:  {
    width: '80%',
    height: '30%',
    marginTop: 10,
    // backgroundColor: '#F5FCFF',
    backgroundColor: 'rgba(255, 255, 255, .7)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
  user2: {
    textAlign: 'center',
    color: 'blue',
    marginBottom: 5,
  },
  contentContainer: {
    paddingVertical:30
  },
  car: {
    padding: 8
  },
  login: {
    padding: 8
  }
  
});
