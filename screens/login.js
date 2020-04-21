import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';


export default class extends React.Component {
  state = {
    email: "",
    password: ""
  }
  render() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo}
        source={require('./assets/images/logo.png')}
      />
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email/Username"
          style={styles.inputText}
          onChangeText={text => this.setState({ email: text})} />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.inputText}
          onChangeText={text => this.setState({password: text})}/>

      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(63,117,222,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom:70
  },
  inputView: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: '80%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding:20,
    alignItems: 'center'
  },
  inputText: {
    height: 50,
    color: 'white'
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 12,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5b',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 40
  },
  loginText: {
    color: 'white'
  }
});
