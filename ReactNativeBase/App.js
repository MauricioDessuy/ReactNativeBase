import React, { Component } from 'react';

import { Text, View, StyleSheet, Button, Image } from 'react-native';

export default class PrimeiroProjeto extends Component {

  render() {

    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  
});
