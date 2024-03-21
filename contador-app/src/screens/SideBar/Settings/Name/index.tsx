import React, { useState } from 'react';
import { Text, TextInput, Alert, View } from 'react-native';

import { styles } from './style';
import { useAuth } from '../../../../context/UserAuthContext';
import { TouchableButton } from '../../../../components/Button';

import { updateProfile } from 'firebase/auth';

export function Name({navigation}: any) {
  const { currentUser } = useAuth()
  const name = currentUser?.displayName ? currentUser.displayName : "Nome"
  const [newName, setNewName] = useState("")

  const changeName = async (newName: string) => {
    if(currentUser && newName) {
      try {
        await updateProfile(currentUser, {
          displayName: newName
        })
        Alert.alert(
          "Sucesso",
          "Nome atualizado com sucesso",
          [
            {text: "OK", onPress: () => navigation.goBack()}
          ]
        )
      } catch (error) {
        console.error("Erro ao atualizar o nome do perfil:", error)
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Text style={styles.text}>Nome</Text>
          <Text style={{ color: "#fff", marginTop: 15, fontFamily: "Montserrat-Regular", fontSize: 15 }}>Defina seu nome</Text>
          <TextInput
            placeholder={ name }
            style={{
              borderWidth: 1,
              marginTop: 20,
              padding: 10,
              borderRadius: 7,
              fontSize: 18,
              borderColor: "#fff",
              color: "white"
            }}
            placeholderTextColor={"white"}
            onChangeText={setNewName}
          />
          <TouchableButton
            onPress={() => changeName(newName)}
            title='Salvar Nome'
            backgroundColor='brown'
            borderColor='brown'
            borderWidth={2}
            padding={10}
            fontSize={18}
            fontFamily='Montserrat-Regular'
            style={{ marginTop: 30 }}
            textStyle={{ color: "#fff" }}
          />
      </View>
    </View>

  );
}