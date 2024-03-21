import React, { useLayoutEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';
import { firestore } from '../../../../../services/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../../../../context/UserAuthContext';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableButton } from '../../../../../components/Button';
import { WINDOW_WIDTH } from '../../../../../constants/styles';

const updateParticipantCount = async (desafioId: any, userId: any, newCount: number) => {
  const desafioRef = doc(firestore, "desafios", desafioId)
  const desafioSnap = await getDoc(desafioRef)

  if (desafioSnap.exists()) {
    const desafioData = desafioSnap.data()
    const updateParticipantes = desafioData.participantes.map((participante: any) => {
      if (participante.userId === userId) {
        return { ...participante, quantidade: newCount }
      }
      return participante
    })
    await updateDoc(desafioRef, {
      participantes: updateParticipantes
    })
  } else {
    console.log("Desafio Não encontrado")
  }
}

export function CountScreen({ route, navigation }: any) {
  const [count, setCount] = useState<number>(0)
  const { desafioId } = route.params
  const { currentUser } = useAuth()

  const handleSaveCount = () => {
    if (currentUser?.uid) {
      updateParticipantCount(desafioId, currentUser.uid, count)
        .then(() => console.log("Contagem atualizada com sucesso"))
        .catch((error) => console.error("Erro ao atualizar contagem", error));
    }
    navigation.navigate("ChallengeScreen", {desafioId: desafioId})
  }

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    // updateParticipantCount(desafioId, currentUser?.uid, newCount)
  }

  const handleDecrement = () => {
    const newCount = count > 0 ? count - 1 : count;
    setCount(newCount);
    if (count > 0) {
      // updateParticipantCount(desafioId, currentUser?.uid, newCount);
    }
  }

  const fetchCurrentCount = async () => {
    const desafioRef = doc(firestore, "desafios", desafioId);
    const desafioSnap = await getDoc(desafioRef);

    if (desafioSnap.exists()) {
      const participante = desafioSnap.data().participantes.find((p: any) => p.userId === currentUser?.uid);
      if (participante) {
        console.log("Setando count")
        setCount(participante.quantidade);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCurrentCount();
    }, [navigation])
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableButton
        title='Salvar'
        onPress={handleSaveCount}
        backgroundColor='transparent'
        fontSize={16}
        fontFamily='Montserrat-Medium'
        textStyle={{ color: "red", marginRight: 20 }}
        />
      )
    })
  }, [navigation, count])

  return (
    <View style={styles.container}>
      <View style={styles.num}>
        <Text style={{ color: "#fff", fontSize: 200 }}>{count}</Text>
      </View>
        <View style={styles.count}>
          <TouchableButton
            title='+'
            onPress={handleIncrement}
            backgroundColor='brown'
            borderRadius={50}
            style={{ width: WINDOW_WIDTH - 50 }}
            fontSize={80}
          />
          <TouchableButton
            title='-'
            onPress={handleDecrement}
            backgroundColor='brown'
            borderRadius={50}
            style={{ width: WINDOW_WIDTH - 50 }}
            fontSize={60}
          />
        </View>
    </View>
  );
}