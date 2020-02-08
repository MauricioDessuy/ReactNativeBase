import React, { Component } from 'react';

import { Text, View, StyleSheet, Button, Image } from 'react-native';

class Janta extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      comida: props.comida
    };
    var comidas = ['Pizza', 'Lasanha', 'Burguer', 'Sopa', 'Arroz'];

    setInterval(() => {
      this.setState(previousState => {
        let n = Math.floor(Math.random() * comidas.length);
        return {comida: comidas[n]};
      });
    }, 1000);
  }

  render() {

    return (
      <View>
        <Text style={{textAlign:'center', fontWeight: 'bold', fontSize: 20, color: 'red'}}>Hoje você vai jantar: </Text>
        <Text style={{textAlign: 'center', fontSize: 20}}>{this.state.comida}</Text>
      </View>
    );
  }
}

export default class PrimeiroProjeto extends Component {

  render() {

    return (
      <View style={{paddingTop: 30}}>
        <Janta comida='Bolacha'/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  texto : {
    fontSize: 30
  }
});