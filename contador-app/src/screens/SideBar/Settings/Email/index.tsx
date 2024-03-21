import React, { useState } from 'react';
import { Text, TextInput, Alert, View } from 'react-native';

import { styles } from './style';
import { useAuth } from '../../../../context/UserAuthContext';
import { TouchableButton } from '../../../../components/Button';

import { updateEmail } from 'firebase/auth';

export function Email({navigation}:any) {
  const { currentUser } = useAuth()
  const email = currentUser?.email ? currentUser.email : "Email"
  const [newEmail, setnewEmail] = useState("")

  const changeEmail = async (newEmail: string) => {
    if(currentUser && newEmail) {
      try {
        await updateEmail(currentUser, newEmail)
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
        <Text style={styles.text}>Email</Text>
          <Text style={{ color: "#fff", marginTop: 15, fontFamily: "Montserrat-Regular", fontSize: 15 }}>Seu e-mail é seu identificador para entrar no Bite Challenge. Se você esquecer sua senha, poderá redefini-la usando este e-mail.</Text>
          <TextInput
            placeholder={ email }
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
            onChangeText={setnewEmail}
          />
          <TouchableButton
            onPress={() => changeEmail(newEmail)}
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