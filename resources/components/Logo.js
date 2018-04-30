import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image
} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image style={styles.imgStyle} source={require('../images/images.png')}/>
          		<Text style={styles.logoText}> Mothly expenses Assistant </Text>
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 15,
  	fontSize:20,
  	color:'#eceff1'
  },
  imgStyle: {
    width:100,
    height: 70,
    borderRadius: 5,
    borderWidth:5,
    borderColor:'#4db6ac'


  }
});
