import React, {Component} from 'react';
import {ScrollView, Text, View, ImageBackground, Image, Dimensions, StyleSheet} from 'react-native';

import Swiper from 'react-native-swiper';
import SearchBar from './SearchBar.js';
import Categories from './Categories.js';
import Listings from './Listings.js';
import categoriesList from '../data/Categories.js';
import listings from '../data/Listings.js';

const Slider = props => ( <View style = {styles.container} >
    <ImageBackground source={props.uri} style={styles.image}></ImageBackground>
  </View>
)

const {width} = Dimensions.get('window')

export default class Category extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      imagesSlider: [
        require('./../images/1.jpeg'),
        require('./../images/2.jpeg'),
        require('./../images/3.jpeg')
      ]
    }
  }

  renderListings() {
    return listings.map((listing, index)=>{
      return (
        <View key={'listing-${index}'} >
          <Listings
            key = {'listing-item-${index}'}
            title = {listing.title}
            boldTitle = {listing.boldTitle}
            listings = {listing.listings}
            showAddToFav = {listing.showAddToFav}  />
        </View>);
    } );
    
  }

  render() {
    return (
      <ScrollView>
        <Swiper autoplay={true} height={200} >
        {
          this.state.imagesSlider.map((item,i) => <Slider
              uri={item}
              key={i} /> )
        }
        </Swiper>
      <View style={styles.wrapper}>
        <SearchBar /> 
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollViewContent} >
          <Text style={styles.heading}>Featured List</Text>
          <View style={styles.categories} > 
            <Categories categories = {categoriesList} />  
          </View>
          {this.renderListings()}
        </ScrollView>
      </View>
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'

  },
  image: {
    flex: 1,
    padding: 5
  },
  categories: {
    marginBottom: 40
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',

  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: '#484848'
  },
  scrollview: {
    paddingTop: 50,
  },
  scrollViewContent: {
    paddingBottom: 80,
  }
});
