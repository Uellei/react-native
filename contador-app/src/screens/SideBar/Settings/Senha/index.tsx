import React, { useState } from 'react';
import { Text, TextInput, Alert, View } from 'react-native';


import { styles } from './style';
import { useAuth } from '../../../../context/UserAuthContext';
import { TouchableButton } from '../../../../components/Button';

import { EmailAuthProvider, reauthenticateWithCredential, updateEmail, updatePassword } from 'firebase/auth';

export function Senha({navigation}: any) {
  const { currentUser } = useAuth()
  const email = currentUser?.email ? currentUser.email : "Email"
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setnewPasswordd] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")


  const changePassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => {
    if(!currentUser) {
      console.error("Nenhum usuário logado.")
      return
    }
    if(newPassword !== confirmPassword) {
      console.error("As novas senhas não coincidem.")
      return
    }
    // Reautenticar o usuário
    const credential = EmailAuthProvider.credential(email, currentPassword);
    try {
      await reauthenticateWithCredential(currentUser, credential);
    } catch (error) {
      console.error("Senha atual incorreta ou erro na reautenticação:", error);
      return;
    }

    // Atualizar a senha
    try {
      await updatePassword(currentUser, newPassword)
      Alert.alert(
        "Sucesso",
        "Senha atualizada com sucesso",
        [
          {text: "OK", onPress: () => navigation.goBack()}
        ]
      )
    } catch (error) {
      console.error("Erro ao atualizar a senha:", error)
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <Text style={styles.text}>Senha</Text>
          <Text style={{ color: "#fff", marginTop: 15, fontFamily: "Montserrat-Regular", fontSize: 15 }}>A senha deve ter entre 6 e 16 caracteres</Text>
          <TextInput
            placeholder="Senha atual"
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
            onChangeText={setCurrentPassword}
          />
          <TextInput
            placeholder="Nova senha"
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
            onChangeText={setnewPasswordd}
          />
          <TextInput
            placeholder="Confirme a nova senha"
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
            onChangeText={setconfirmPassword}
          />
          <TouchableButton
            onPress={() => changePassword(currentPassword, newPassword, confirmPassword)}
            title='Salvar'
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