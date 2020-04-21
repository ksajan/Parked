import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableHighlight, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Testing</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
