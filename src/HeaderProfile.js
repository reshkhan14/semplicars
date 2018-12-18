import React, {Component} from 'react';
import {ScrollView, AppRegistry, StyleSheet, Text, TextInput, View, ImageBackground, Button} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
        <ImageBackground source={require('./../images/profhead-bg.jpeg')} style={styles.headerBackground}>
          <View style={styles.header} >
            <View style={styles.profilepicWrap} >
              <ImageBackground source={require('./../images/avatar.jpeg')} imageStyle={{ borderRadius: 100 }} style={styles.profilepic}></ImageBackground>
            </View>
            <Text style={styles.name} >Profile</Text>
            <Text style={styles.pos} >APP INFO</Text>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    // width: null,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profilepicWrap: {
    width: 180,
    height:180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 16,
    zIndex: 99
  },
  profilepic: {
    flex: 1,
    // width: null,
    // alignSelf: 'stretch',
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 4,
    zIndex: -1
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  }
});
