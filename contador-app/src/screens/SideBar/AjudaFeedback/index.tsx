import React from 'react';

import { styles } from './style';
import { Itens } from '../../../components/Itens';

import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

export function AjudaFeedback() {
  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Itens icon={<FontAwesome5 name="facebook-messenger" size={30} color="#fff" />} labelName='Conectar no Messenger' name='Fale com algúem agora no Messenger.'/>
        <Itens icon={<FontAwesome5 name="instagram" size={30} color="#fff" />} labelName='Envie uma DM no Instagram' name='Fale com alguém agora no Instagram.'/>
        <Itens icon={<FontAwesome5 name="twitter" size={30} color="#fff" />} labelName='Envie uma DM no Twitter' name='Fale com alguém agora no Twitter.'/>
        <Itens icon={<FontAwesome5 name="star" size={30} color="#fff" />} labelName='Avalie no Google Play' name='Deixe uma avaliação no Google Play.'/>
        <Itens icon={<MaterialCommunityIcons name="email-outline" size={30} color="#fff" />} labelName='Enviar um email' name='Para questões que podem esperar.'/>
        <Itens icon={<MaterialCommunityIcons name="help-circle-outline" size={30} color="#fff" />} labelName='FAQ' name='Veja se sua dúvida já foi respondida.'/>
      </View>
    </View>
  );
}