import React, { Component } from 'react';

import { Text, View, StyleSheet, Button } from 'react-native';

export default class PrimeiroProjeto extends Component {

  somar(a, b) {
    return a + b;
  }

  render() {
    let nome = 'Mauricio';
    return (
      <View>
        <Text>Olá mundo! { nome }</Text>
        <Text>Olá mundo! { nome }</Text>
        <Text>Olá mundo! { 5 + 3 }</Text>
        <Text style={styles.texto}>Olá mundo!</Text>
        <Text style={styles.texto}>{ this.somar(5, 11) }</Text>
        <Button title="Aperte" onPress={() => {
          alert("Clicado aaaa");
        }} />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  texto : {
    fontSize: 30
  }
});