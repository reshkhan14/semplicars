
import React, {Component} from 'react';
import {ScrollView,Platform, StyleSheet, Text, TextInput, View, ImageBackground, Button} from 'react-native';

import {createStackNavigator} from 'react-navigation';
import ImageOverlay from './ImageOverlay.js';
import Spinner from 'react-native-spinkit';

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
      <ImageBackground source={require('./../images/load.jpeg')} style={styles.container}>
      <View style={styles.heading}>
      <ImageOverlay header="SEMPLICARS.COM" />
      <View style={styles.spin} ><Spinner style={{}} color={'black'} size={100} type={'Circle'} /></View>
      
      </View>
      <View style={styles.inner}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.car}><Button title="CLICK TO LOGIN" color="#2f4f4f" raised={true} onPress={()=>navigate('Cars')} /></View>
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
    // height: '100%',
    // marginTop: 360,
    // backgroundColor: '#F5FCFF',
    // backgroundColor: 'rgba(255, 255, 255, .7)',
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
    // paddingVertical:30
  },
  car: {
    padding: 8,
    width: '100%',
    height: '50%',
    marginTop: 110,
    fontSize: 40
  },
  login: {
    padding: 8
  },
  heading: {
    marginTop: 70,
  },
  spin: {
    marginTop:80,
    marginLeft: 80
  }
  
});
