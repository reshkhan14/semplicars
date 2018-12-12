import React, {Component} from 'react';
import {Icon, Button, Text, View, StyleSheet} from 'react-native';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeTabs from './HomeTabs.js';

class HomeScreen extends React.Component {
  render() {
    return (
        <HomeTabs />
      );
  }
}
class CatScreen extends React.Component {
  render() {
    return (
        <View style={styles.home}>
          <Text>CAT!</Text>
          <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('More')}
        />
        </View>
      );
  }
}
class AddScreen extends React.Component {
  render() {
    return (
        <View style={styles.home}>
          <Text>Add!</Text>
          <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
      );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={styles.home}>
          <Text>More!</Text>
          <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        </View>
      );
  }
}

const TabNavigator = createBottomTabNavigator({
  HOME: HomeScreen,
  CATEGORY: CatScreen,  
  POSTAD: AddScreen,
  MORE: SettingsScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HOME') {
          iconName = `ios-home`;
          // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'MORE') {
          iconName = `ios-more`;
          // iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'POSTAD') {
          iconName = `ios-add-circle-outline`;
          // iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'CATEGORY') {
          iconName = `ios-list-box`;
          // iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

