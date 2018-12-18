import React, {Component} from 'react';
import {AppRegistry, Icon, Button, Text, View, StyleSheet, Dimensions, TouchableOpacity, ListView, Image, ScrollView} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {createStackNavigator,} from 'react-navigation';
 
import Ads from './Ads.js';
import Notification from './Notification.js';

const FirstRoute = () => (
  <ScrollView style={[styles.container]} ><Ads /></ScrollView>
  // <View style={[styles.scene]} >{this.renderForm()}</View>
);
const SecondRoute = () => (
  <ScrollView style={[styles.containernot]} ><Notification /></ScrollView>
);

// Put all this function below in Ads.js page from link https://viblo.asia/p/app-movies-with-react-native-oOVlY48vZ8W and remove from here renderform,componentdidmount,getmoviesfromapi so that we can take data dynamically than hardcoding

renderForm = () => {
  
    {this.componentDidMount()}

    // const {navigate} = this.props.navigation;

    const width = (Dimensions.get('window').width / 3) - 4;
  return (<ListView contentContainerStyle={styles.list} dataSource={this.state.results} renderRow={(rowData) => <TouchableOpacity><Image style={{width: width, height: 200, margin: 2}} source={{uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + rowData.backdrop_path}} /></TouchableOpacity> } />);
}

componentDidMount = () => {
    // const {navigation} = this.props;
    // const genderId = navigation.getParam('id', 'NO-ID');
    return getMoviesFromApi()
}



getMoviesFromApi = () => {
    return fetch('https://api.themoviedb.org/3/genre/18/movies?api_key=912e9096e07b3fd3864812ce98b6283c')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          genderId: responseJson.id,
          page: responseJson.page,
          total_pages: responseJson.total_pages,
          results: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(responseJson.results),
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
 
export default class HomeTabs extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
    headerVisible: false,
  }
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Commercial Ads' },
      { key: 'second', title: 'Notification' },
    ],
  };
 
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })} style={styles.tabview} />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containernot: {
    flex: 1,
    backgroundColor: '#fff',
  }
});