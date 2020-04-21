import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, KeyboardAvoidingView} from 'react-native';
import loginForm from './LoginForm';


// Creating components for loginForm

class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require()}/>
        </View>

        <View style={styles.formContainer}>
          <loginForm/>
        </View>
      </KeyboardAvoidingView>
    )};
  }
}

// Defining Inline Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center

  },
  logo: {
    position: 'absolute',
    width: 300,
    height: 100
  }
});

export default Login;
