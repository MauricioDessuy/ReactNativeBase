import React, { Component } from 'react';

import { Text, View, StyleSheet, Button, Image } from 'react-native';

class Imagem extends Component {
  render() {
    let imagem = {
      uri: 'https://as2.ftcdn.net/jpg/00/59/03/51/500_F_59035104_XtkeD0GJgfGxf9Hiq8tXNibjhy42ZwCx' + this.props.nome
    }

    return (
      <Image source={imagem} style={{width: parseInt(this.props.largura), height: parseInt(this.props.altura)}}/>
    );
  }
}

export default class PrimeiroProjeto extends Component {

  somar(a, b) {
    return a + b;
  }

  render() {
    let nome = 'Mauricio';
    let imagem = {uri: 'https://as2.ftcdn.net/jpg/00/59/03/51/500_F_59035104_XtkeD0GJgfGxf9Hiq8tXNibjhy42ZwCx.jpg'};
    //let imagem = {uri: './assets/image.jpg'};

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
        <Text style={{ fontSize: 30, color: 'red', margin: 20}}>Texto aleatório</Text>
        <Imagem nome='.jpg' largura='250' altura='250'/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  texto : {
    fontSize: 30
  }
});