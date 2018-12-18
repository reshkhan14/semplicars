import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions, Image} from 'react-native';

import { Card, ListItem, Button, Icon, List } from 'react-native-elements'

import users from '../data/Notification.js';

export default class ContentContainer extends Component {

  render() {
    return (
      <List containerStyle={styles.list}>
        {
          users.map((u, i) => {
            return (
              <ListItem
                key={i}
                title={u.name}
                avatar={{uri:u.avatar}} />
            );
          })
        }
      </List>
      
    );
  }
}

const styles = StyleSheet.create({
    list: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        padding: 5
    }
});
