import React from 'react';

import { styles } from './style';
import { Itens } from '../../../components/Itens';

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export function AjudaFeedback() {
  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Itens icon={<FontAwesome5 name="facebook-messenger" size={30} color="#888" />} labelName='Conectar no Messenger' name='Fale com algúem agora no Messenger.' disabled={true}/>
        <Itens icon={<FontAwesome5 name="instagram" size={30} color="#fff" />} labelName='Envie uma DM no Instagram' name='Fale com alguém agora no Instagram.' url='https://www.instagram.com/wmarcelo.07/'/>
        <Itens icon={<FontAwesome5 name="twitter" size={30} color="#888" />} labelName='Envie uma DM no Twitter' name='Fale com alguém agora no Twitter.' disabled={true}/>
        <Itens icon={<FontAwesome5 name="star" size={30} color="#888" />} labelName='Avalie no Google Play' name='Deixe uma avaliação no Google Play.' disabled={true}/>
        <Itens icon={<MaterialCommunityIcons name="email-outline" size={30} color="#fff" />} labelName='Enviar um email' name='Para questões que podem esperar.' url='mailto:wessmarcelo@gmail.com'/>
        <Itens icon={<MaterialCommunityIcons name="help-circle-outline" size={30} color="#888" />} labelName='FAQ' name='Veja se sua dúvida já foi respondida.' disabled={true} />
      </View>
    </View>
  );
}