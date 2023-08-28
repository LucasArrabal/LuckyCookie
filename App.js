import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class app extends Component{
  constructor(props){
    super(props);
    this.state = {
      txt : ' ',
      img: require('./Src/biscoito.png')
    };

    this.OpenCookie = this.OpenCookie.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  OpenCookie(){
    let numAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      txt: '"'+ this.frases[numAleatorio] + '"',
      img: require('./Src/biscoitoAberto.png')
    })
  }


  render(){
    return(
      <View style={styles.container}>

        <Image style={styles.img}
        source={this.state.img}
        />
        <Text style={styles.txtFrase}>{this.state.txt}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.OpenCookie}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTxt}>Open Cookie</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#483D8B',
    alignItems: 'center',
    justifyContent:'center',
  },
  img:{
    width: 250,
    height: 250,
  },
  txtFrase:{
    fontSize: 20,
    color: 'white',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    backgroundColor: '#836FFF',
    width: 230,
    height: 50,
    borderWidth: 2.5,
    borderColor: '#000080',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000080'
  }
});

export default app;