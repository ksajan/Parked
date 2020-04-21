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
import SignUpForm from './components/mycomponents/form.js';

export default class App extends React.Component {
  render() {
    return (<View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('./assets/images/person/2x/baseline_person_black_18dp.png')}/>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="First Name" style={styles.inputText} onChangeText={text => this.setState({name: first})}/>
      </View>

      <View style={styles.inputView}>
        <TextInput placeholder="Last Name" style={styles.inputText} onChangeText={text => this.setState({name: last})}/>
      </View>

      <View style={styles.inputView}>
        <TextInput placeholder="Email" style={styles.inputText} onChangeText={text => this.setState({email: text})}/>
      </View>

      <View style={styles.inputView}>
        <TextInput secureTextEntry={true} placeholder="Password" style={styles.inputText} onChangeText={text => this.setState({password: text})}/>

      </View>
    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(63,117,222,1)',
  },
  content: {
    marginTop: 300,
    alignItems: 'center',
    marginBottom: 50
  },
  inputView: {
    backgroundColor: '#ffffff',
    width: '80%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    padding: 20,
    marginLeft: 40,
    alignItems: 'center'
  }
});
