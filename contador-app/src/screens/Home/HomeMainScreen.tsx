import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './style';
import { useAuth } from '../../context/UserAuthContext';

import Logo from "../../../assets/images/Logo.png"
import { TouchableButton } from '../../components/Button';
import { firestore } from '../../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { LoadingScreen } from '../../components/LoadingScreen';

const icon = () => (
  <View style={styles.icon}>
    <Image style={styles.logo} source={Logo} />
  </View>
)

export function HomeScreen({ navigation, route }: any) {
  const { currentUser } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleCreateChallenge = () => {
    navigation.navigate("CreateChallenge")
  }

  const handleJoinChallenge = () => {
    navigation.navigate("JoinChallenge")
  }

  useEffect(() => {
    const checkUserChallenge = async (userId: string) => {
      setIsLoading(true)
      try {
        const q = query(
          collection(firestore, "desafios"),
          where("userIds", "array-contains", userId)
      )
      const querySnapshot = await getDocs(q)
      if(!querySnapshot.empty) {
        const firstChallengeDoc = querySnapshot.docs[0]
        const firstChallengeId = firstChallengeDoc.id

        navigation.navigate("ChallengeScreen", {desafioId: firstChallengeId})
      }
      } catch (error) {
        console.error("Erro ao verificar desafios cadastrados do usuário:", error)
      } finally {
        setIsLoading(false)
      }
  }
    if(currentUser) {
      checkUserChallenge(currentUser?.uid)
    } else {
      setIsLoading(false)
    }
  }, [currentUser, navigation])

  if(isLoading) {
    return <LoadingScreen message="Carregando..."/>
  }

  return (
    <View style={styles.container}>
      {icon()}
      <Text style={styles.infoText}>
        Você está partindo de nenhum ativo ou futuro. Crie ou participe de um desafio para começar
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableButton
          title='Crie Desafio'
          onPress={handleCreateChallenge}
          borderWidth={1}
          padding={20}
          fontSize={20}
          style={{ width: 150 }}
        />
        <TouchableButton
          title='Junte-se desafio'
          onPress={handleJoinChallenge}
          borderWidth={1}
          padding={20}
          fontSize={20}
          style={{ width: 150 }}
        />
      </View>
    </View>
  )
}