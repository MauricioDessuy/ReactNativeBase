import React, { Component } from 'react';

import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default class PrimeiroProjeto extends Component {

  render() {

    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <View style={{height: 170, backgroundColor: 'blue'}}></View>
        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
        <View style={{flex: 2, backgroundColor: 'black'}}></View>
        <View style={{flex: 3, backgroundColor: 'red'}}></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
});
