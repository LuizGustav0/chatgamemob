import React, { Component } from 'react';
import Bot from 'react-native-chatbot';
import { StyleSheet, Text, SafeAreaView, StatusBar , View, Button} from 'react-native';

//Instruções que o chatbot irá seguir:
const steps = [
  {
    id: '1',
    message: 'Olá moreno gostoso, qual é o seu nome??',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: 'ola',
  },
  {
    id: 'ola',
    message: 'Olá {previousValue}',
    trigger: '3',
  },
  {
    id: '3',
    message: 'O que você quer saber de mim?',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Topa casar comigo?', trigger: '5' },
      { value: 2, label: 'Quer ir ao cinema?', trigger: '6' },
      { value: 3, label: 'Qual seu insta?', trigger: '7' },
      { value: 4, label: 'Quero nada não, tchau', trigger: '8' },
    ],
  },
  {
    id: '5',
    message: 'Só daqui 10 anos!',
    trigger: '3',
  },
  {
    id: '6',
    message: 'Não, valeu!',
    trigger: '3',
  },
  {
    id: '7',
    message: 'winny_jen',
    trigger: '3',
  },
  {
    id: '8',
    message: 'Até mais',
    end: true,
  },
];


export default class ChatBot extends Component {
  render() {
    return (
      <SafeAreaView>
      <Bot 
        steps={steps} 
        // Avatar do Bot e do usuário //
        botAvatar='https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/s150x150/120303968_206249530929277_2015095838873592292_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_ohc=jli6ROAY-qUAX9ODRlz&edm=AP_V10EBAAAA&ccb=7-4&oh=7fca9ac63b44d4ef9e950e8c75085d02&oe=60DE0CAC&_nc_sid=4f375e'
        userAvatar='https://scontent-gru1-2.cdninstagram.com/v/t51.2885-19/s150x150/122610079_704113333541235_7342795915107935840_n.jpg?tp=1&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_ohc=HXJLrUScRLwAX_rrG5V&edm=ABfd0MgBAAAA&ccb=7-4&oh=ffba470889c87698d866b77c561b8e9e&oe=60DE2623&_nc_sid=7bff83'

        // Cores dos diálogos //
        botFontColor={ '#FFFDF8' } 
        userFontColor={ '#FFFDF8' }
        botBubbleColor={ '#E89984' } 
        userBubbleColor={ '#FFC286' }

        // Cores do fundo do chat //
        style={{ backgroundColor: '#FFFDF8', marginTop: 2 }}
        contentStyle={{ backgroundColor: '#FFFDF8' }}

        // Estilo do Rodapé (Footer) //
        footerStyle={{ backgroundColor: '#fff', margin: 5, padding: 1, borderRadius: 7, elevation: 2, }}
        submitButtonStyle={{ backgroundColor: '#E89984', borderRadius: 4, width: 63, margin: 2 }}
      />
      </SafeAreaView>
    );
  }
}