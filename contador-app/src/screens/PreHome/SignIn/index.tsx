import React, { useState } from 'react';
import { Alert, Text, View } from 'react-native';

import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from '../../../services/firebaseConfig';
import { FirebaseError } from 'firebase/app'

import { styles } from './style';
import { InputText } from '../../../components/InputText';
import { TouchableButton } from '../../../components/Button';

export function SignIn({ navigation }: any) {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        // LOGIN BEM-SUCEDIDO
        console.log("Login Bem-sucedido", userCredential.user)
        navigation.navigate("Home", {desafioId: "Lar"})
      })
      .catch((error: FirebaseError) => {
        console.log("Error ao fazer login:", error.message)
        Alert.alert("Erro ao fazer login", error.message)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <View>
          <Text style={styles.signInText}>Entrar</Text>
          <Text style={styles.welcomeText}>Bem-Vindo de volta</Text>
        </View>
        <View style={styles.signIn}>
          <View>
            <InputText
              placeholders={["Email", "Senha"]}
              onChangeTextFunctions={[setEmail, setPassword]}
              secureTextEntries={[false, true]}
            />
          </View>
          <View>
            <TouchableButton
              title='Entrar'
              onPress={handleLogin}
              borderWidth={2}
              padding={10}
              style={{ marginTop: 50 }}
            />
            <TouchableButton
              title='Redefinir senha'
              onPress={() => { }}
              borderWidth={2}
              padding={10}
              style={{ marginTop: 30 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}