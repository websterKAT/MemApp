import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import firebase from 'react-native-firebase';

export default class Logo extends Component<{}> {

  home() {
    Actions.home()
  }

  constructor(props) {
    super(props)
    this.state = ({
      email:'',
      password:''
    })
  }

  signUpUser = (email,password) =>  {

    try {
      if(this.state.password.length < 6){
        alert("Please enter at least 6 charactors for the password");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
      home();

    } catch (e) {
      console.log(e.toString())
    }

  }

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText= {(email)=> this.setState({email})}
              />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)'
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText= {(password)=> this.setState({password})}
              />
           <TouchableOpacity style={styles.button} onPress={this.signUpUser(this.state.email,this.state.password)}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }

});
