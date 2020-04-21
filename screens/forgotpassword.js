import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (<View style={styles.container}>
      <Image style={styles.logo}
        source={require('./assets/images/logo.png')}
      />
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email"
          style={styles.inputText}
          onChangeText={text => this.setState({ email: text})} />
      </View>

      <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgotText}>Get OTP</Text>
      </TouchableOpacity>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgba(63,117,222,1)',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#ffffff',
    height: 50
  },
  logo: {
    padding: 10,
    marginBottom: 150,
    alignItems: "center"
  },
  forgot: {
    width: '50%',
    backgroundColor: '#fb5b5b',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 200,
  }
});
