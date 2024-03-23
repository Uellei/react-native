import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './style';
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../../../../services/firebaseConfig';
import { ChallengeData, Participante } from '../../../../../context/ChallengeContext';
import { useAuth } from '../../../../../context/UserAuthContext';
import { AsyncImage } from '../../../../../components/AsyncImage';
import { TouchableButton } from '../../../../../components/Button';
import { COLORS } from '../../../../../constants/styles';

export function Classification({ route, navigation }: any) {
  const { currentUser } = useAuth()
  const [info, setInfo] = useState<ChallengeData>({
    nomeDesafio: "",
    nomeEstabelecimento: "",
    descricao: "",
    data: "",
    participantes: [],
    userIds: []
  })
  const { desafioId } = route.params

  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(doc(firestore, "desafios", desafioId), (doc) => {
        if (doc.exists()) {
          setInfo({
            nomeDesafio: doc.data().nomeDesafio,
            nomeEstabelecimento: doc.data().nomeEstabelecimento,
            descricao: doc.data().descricao,
            data: doc.data().data,
            participantes: doc.data().participantes,
            userIds: doc.data().userIds
          });
        } else {
          console.log("Desafio não encontrado");
        }
      });
      return () => unsubscribe();
    } catch (error) {
      console.log("Erro ao pegar o id para iniciar o challenge:", error);
    }
  }, [desafioId])

  const lider = info.participantes.reduce((prev, current) => {
    return (prev.quantidade > current.quantidade) ? prev : current
  }, info.participantes[0])

  const user = info.participantes.find(participante => participante.userId === currentUser?.uid)

  const participantesOrdenados = info.participantes.sort((a, b) => b.quantidade - a.quantidade)

  const userPosition = participantesOrdenados.findIndex(participante => participante.userId === currentUser?.uid) + 1


  // SUB COMPONENTS
  const infoChallenge = () => (
    <View style={styles.infoChallengeContainer}>
      {lider && (
        <View style={styles.info}>
          <View>
            <AsyncImage nome={lider.nome} userId={lider.userId} style={styles.infoImage} />
          </View>
          <View>
            <Text style={styles.infoText}>{lider.quantidade}</Text>
            <Text style={styles.infoText}>Líder</Text>
          </View>
        </View>
      )}
      {user && (
        <View style={styles.info}>
          <View>
            <AsyncImage nome={user.nome} userId={user.userId} style={styles.infoImage} />
          </View>
          <View>
            <Text style={styles.infoText}>{user.quantidade}</Text>
            <Text style={styles.infoText}>Você</Text>
          </View>
        </View>
      )}
      <View style={[styles.info]}>
        <View>
          <FontAwesome5 name="trophy" size={30} color="gold" />
        </View>
        <View>
          <Text style={[styles.infoText, { marginLeft: 10 }]}>{userPosition} ° Lugar</Text>
        </View>
      </View>
    </View>
  )

  const classification = () => (
    <View>
      <Text style={[styles.text, { marginTop: 20 }]}>Classificação</Text>
      <ScrollView>
        {info.participantes.map((participante: Participante, index) => (
          <View key={index} style={{ flexDirection: "row", marginTop: 10 }}>
            <View style={{ alignItems: "center", justifyContent: "center", marginRight: 10 }}>
              <AsyncImage nome={participante.nome} userId={participante.userId} style={{ height: 50, width: 50, borderRadius: 50 }} />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
              <Text style={[styles.infoText, { fontSize: 18, fontWeight: "bold" }]}>{participante.nome}</Text>
              <Text style={[styles.infoText, { fontSize: 16 }]}>{participante.quantidade}</Text>
            </View>
            <View style={{ justifyContent: "flex-start" }}>
              <Text style={[styles.infoText, { fontSize: 30 }]}>{index + 1}°</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Text style={styles.text}>{info.nomeDesafio}</Text>
        {infoChallenge()}
        {classification()}
      </View>
      <TouchableButton
        title='+'
        onPress={() => { navigation.navigate("CountScreen", { desafioId: desafioId }) }}
        backgroundColor={COLORS.mustard}
        borderRadius={50}
        style={{
          position: "absolute",
          bottom: 30,
          right: 20,
          height: 70,
          width: 70,
          justifyContent: "center",
          alignItems: "center",
        }}
        fontSize={50}
        textStyle={{ color: "#fff" }}
        fontFamily='Montserrat-Medium'
      />
    </View>
  );
}