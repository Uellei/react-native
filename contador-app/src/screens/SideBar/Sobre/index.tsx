import { Text, View } from 'react-native';

import { styles } from './style';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export function Sobre() {

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
      <Text style={[styles.labelText, { fontSize: 30 }]}>Sobre</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          E aí comilões!
          {"\n\n"}

          Seja bem-vindo ao Bite Challenge - o lugar onde a competição e a comida se encontram em uma batalha épica pelo título de Saco sem Fundo!
          {"\n\n"}
          
          Aqui, desafiamos você e seus amigos a enfrentar rodadas de deliciosas batalhas de comida. Quem consegue comer mais sem explodir? Só o tempo dirá!
          {"\n\n"}

          O objetivo deste aplicativo é atuar como um motivador social para uma competição amigável e saudável. Seja para se provar pessoalmente ou em grupo, é importante ter sempre resonspabilidade e reconhecer o seu limite. Espero que você esteja achando útil!
          {"\n\n"}

          Se você tiver alguma ideia ou sugestão sobre como melhorar o aplicativo, sinta-se à vontade para me enviar um e-mail. Eu aprecio os feedbacks, tanto positivos quanto negativos, portanto qualquer feedback que você tiver será muito útil.
          {"\n\n"}

          Saco sem fundo,
          {"\n\n"}

          Weslley Marcelo
          {"\n\n"}
          PFCT (Passa Fome e Come Tudo)
          
        </Text>
      </View>
      </View>
    </View>
  );
}