import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './style';
import { InputText } from '../../../components/InputText';
import Avatar from '../../../components/Avatar';
import { TouchableButton } from '../../../components/Button';
import { handleCreateAccount } from '../../../services/createUserWithEmailAndPassword';

export function SignUp({ navigation }: any) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [imageUri, setImageUri] = useState<any>(null)

  const handleImageUriChange = (uri: string) => {
    setImageUri(uri)
  }

  const onCreateAccount = () => {
    handleCreateAccount({
      name,
      email,
      password,
      confirmPassword,
      imageUri,
      navigation
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <View>
          <Text style={styles.createText}>Criar uma conta</Text>
          <Text style={styles.infoText}>Uma conta é necessária para usar este aplicativo</Text>
        </View>
          <Avatar name={name} onImageUriChange={handleImageUriChange}/>
        <View style={styles.signUp}>
          <View>
            <InputText
              placeholders={["Nome", "Email", "Senha", "Confirmar senha"]}
              onChangeTextFunctions={[setName, setEmail, setPassword, setConfirmPassword]}
              secureTextEntries={[false, false, true, true]}
            />
          </View>
          <View>
            <TouchableButton
              title='Criar uma conta'
              onPress={onCreateAccount}
              borderWidth={2}
              padding={10}
              style={{ marginTop: 50 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}