import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';
import { useChallenge,  } from '../../../../context/ChallengeContext';
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../../../../services/firebaseConfig';
import { TouchableButton } from '../../../../components/Button';

export function ConfirmChallenge({ navigation }: any) {
  const { challenge, updateDesafios } = useChallenge()

  const handleSaveChallenge = async () => {
    // ADICIONA O NOVO DESAFIO AO FIRESTORE
    try {
      const docRef = await addDoc(collection(firestore, "desafios"), challenge);
      const desafioId = docRef.id
      console.log("Desafio adicionado com sucesso", docRef.id);
      await updateDesafios()
      await navigation.navigate(`${desafioId}`, {desafioId: desafioId});
    } catch (error) {
      console.error("Erro ao adicionar desafio: ", error);
    }
  }

  const infosChallenge = () => (
    <View style={styles.infosChallengeContainer}>
      <Text style={styles.infoText}>Desafio dia {challenge.data}</Text>
      <Text style={styles.infoText}>Desafio no {challenge.nomeEstabelecimento}</Text>
      <Text style={styles.infoText}>Pontuação por quantidade</Text>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Text style={styles.text}>{challenge.nomeDesafio}</Text>
        {infosChallenge()}
        <TouchableButton
          title='Criar desafio'
          onPress={handleSaveChallenge}
          padding={20}
          style={{ marginTop: 60 }}
        />
      </View>
    </View>
  );
}