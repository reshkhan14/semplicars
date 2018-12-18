import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, Text, StyleSheet, TouchableHighlight, View, ImageBackground, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';
export default class Listings extends React.Component {
  renderListings(){
    const {listings} = this.props;
    return listings.map((listing,index) => {
      return (
        <TouchableHighlight style={styles.card} key={index} >
          <View style={styles.cardContent}>
            <View style={styles.innerCard} >
              <Icon raised name={listing.iconname} type='font-awesome' style={styles.iconview} color={listing.color} onPress={() => console.log('hello')} />
              <Text>{listing.type}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    });
  }
  render() {
    const {title} = this.props;
    return (
      <View style = "styles.wrapper">
      <View style={styles.titleWrapper} >
        <Text style={styles.title} >{title}</Text>
        <TouchableOpacity style ={styles.seeAllBtn} >
          <Text style={styles.seeAllBtnText} >See All</Text>
          <Icon name ='angle-right' size={18} color= '#484848' />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={styles.scrollViewContain} >
        {this.renderListings()}
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 21,

  },
  title: {
    color: '#484848',
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllBtnText: {
    color: '#484848',
    // color: '#0000EE',
    marginRight: 5,

  },
  scrollView: {
    marginTop: 30,
    marginLeft: 15,

  },
  scrollViewContain: {
    paddingRight: 30,
  },
  card: {
    marginRight: 6,
    width: 155,
    height: '100%',
    marginLeft: 6,
    flexDirection: 'column',
    minHeight: 100,
    marginBottom: 25
  },
  cardContent: {
    // width: '50%',
    height: 100,
    marginBottom:30
    // padding: 5
  },
  image: {
    width: undefined,
    flex: 1,
    borderRadius: 8,
    height: 100,
    marginBottom: 7,
  },
  innerCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center'
  },
  iconview: {
    fontSize: 40,
    marginTop: 10,
    marginBottom:20
  }
});
