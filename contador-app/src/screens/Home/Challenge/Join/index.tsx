import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './style';
import { firestore } from '../../../../services/firebaseConfig';
import { arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../../../context/UserAuthContext';
import { TouchableButton } from '../../../../components/Button';
import { useChallenge } from '../../../../context/ChallengeContext';
import { COLORS } from '../../../../constants/styles';

export function Join({navigation}: any) {
  const { currentUser } = useAuth()
  const [inviteLink, setInvitLink] = useState("")
  const { updateDesafios } = useChallenge()

  const joinChallenge = async (desafioId: any, userId: any, nome: any) => {
    const desafioRef = doc(firestore, "desafios", desafioId)
    const desafioSnap = await getDoc(desafioRef)

    if(desafioSnap.exists()) {
      await updateDoc(desafioRef, {
        participantes: arrayUnion({ userId, nome, quantidade: 0 }),
        userIds: arrayUnion(userId)
      })
    } else {
      console.log("Desafio nãa encontrado")
    }
  }

  const handleJoinChallenge = async () => {
    // EXTRAIR O desafioId DO INVITELINK, DEPENDE DO FORMATO, EU DEIXEI ATÉ ENTÃO SÓ O desafioId
    await joinChallenge(inviteLink, currentUser?.uid, currentUser?.displayName)
    await updateDesafios()
    await navigation.navigate(`${inviteLink}`, {desafioId: inviteLink})
  }

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Text style={styles.text}>Junte-se desafio</Text>
        <Text style={{ color: "#fff", marginTop: 15, fontFamily: "Montserrat-Regular", fontSize: 15 }}>Insira um link de convite ou código para participar de um desafio.</Text>
        <TextInput
          placeholder='Link do convite'
          value={inviteLink}
          onChangeText={setInvitLink}
          style={{
            borderWidth: 1,
            marginTop: 20,
            padding: 10,
            borderRadius: 7,
            fontSize: 18,
            borderColor: "#fff",
            color: "#fff"
          }}
          placeholderTextColor={"white"}
        />
        <TouchableButton
          onPress={handleJoinChallenge}
          title='Juntar'
          backgroundColor={COLORS.mustard}
          borderColor={COLORS.mustard}
          borderWidth={2}
          padding={10}
          fontSize={18}
          fontFamily='Montserrat-SemiBold'
          style={{ marginTop: 30 }}
          textStyle={{ color: "#fff" }}
        />
      </View>
    </View>
  );
}