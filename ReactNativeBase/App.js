import React, { Component } from 'react';

import { Text, View, StyleSheet, Button, Image, TextInput, Alert } from 'react-native';

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputTexto: '',
      texto: ''
    };
    this.apertouBotao = this.apertouBotao.bind(this);
  }

  apertouBotao() {
    let s = this.state;

    if (s.inputTexto == "Mauricio") {
      s.texto = 'Você acertou';
    } else {
      s.texto = 'Você errou';
    }
    this.setState(s);
  }

  render() {

    return (
      <View style={styles.padrao}>
        <TextInput style={styles.input} 
          placeholder="Adivinhe o meu nome"
          onChangeText={(inputTexto) => {
            this.setState({inputTexto});
          }} />
        <Button title='Aperte em mim' 
          onPress={this.apertouBotao}/>
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 10
  },
  padrao: {
    paddingTop: 30
  },
  texto: {
    fontSize: 20,
    textAlign: 'center'
  }
});
