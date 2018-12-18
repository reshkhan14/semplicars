import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View, ImageBackground} from 'react-native';

import Spinner from 'react-native-spinkit';

export default class Splash extends Component<Props> {
	render() {
		return (
			<ImageBackground source={require('./../images/bg.jpeg')} style={styles.container}>
				<View style={styles.logo} >
					<ImageBackground source={require('./../images/semplilogo1.png')} style={styles.image}></ImageBackground>
					<View style={styles.spin} ><Spinner style={{}} color={'#3147a5'} size={80} type={'Circle'} /></View>
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eeeef1'
	},
	logoText: {
		color: '#3b363a',
		fontSize: 24,
		fontWeight: 'bold',
		marginTop: 20
	},
	logo: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logoName: {
		color: '#3e3f8f',
	},
	image: {
		width: 221,
		height: 130
	},
	spin: {
	    marginTop:120,
	    // marginLeft: 40
  	}
});