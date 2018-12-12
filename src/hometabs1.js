import React, {Component} from 'react';
import {Icon, StyleSheet, Text, View, Button} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeTabs extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 0
    }
  }
  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    })
  }
  renderSection = () => {
    if(this.state.activeIndex == 0){
      return (
          <View>
            <Text>This is first tab</Text>
          </View>
        )
    }
  }
  render() {
    return (
      <View>
        <View style={styles.outerContainer}>
          <Button onPress={() => this.segmentClicked(0)} active = {this.state.activeIndex == 0} style = {[this.state.activeIndex == 0 ? {} : {color : 'grey'} ]} title="commercial ads" >
         </Button>
          <Button onPress={() => this.segmentClicked(1)} active = {this.state.activeIndex == 1} style = {[this.state.activeIndex == 1 ? {} : {color : 'grey'} ]} title="notifications" >
          </Button>
        </View>
        {this.renderSection()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    // flexWrap: 'wrap',
    borderTopColor: '#eae5e5',

  }
});
