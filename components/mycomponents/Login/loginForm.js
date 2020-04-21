import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Button, StyleSheet, StatusBar} from 'react-native';


const onButtonPress = () => {
  Alert.alert("Button has been pressed.");
};

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <statusBar barStyle="light-content"/>
        <TextInput style={styles.input}
            autoCapitalize="none"
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            placeholder="Email address"
            placeholderTextColor="rgba(225, 225, 225, 0.7)" />
        
