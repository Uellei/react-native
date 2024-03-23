import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './style';
import Logo from '../../../../assets/images/Logo.png'
import { TouchableButton } from '../../../components/Button';
import { COLORS } from '../../../constants/styles';

// SUB COMPONENT - ICONE LOGIN INICIAL
const iconLogin = () => (
  <View style={styles.loginLogo}>
    <Image style={styles.logo} source={Logo} />
  </View>
)

// SUB COMPONENT - BOAS VINDAS
const welcomeMessage = () => (
  <View style={styles.welcome}>
    <Text style={styles.welcomeText}>Bem Vindo ao Bite Challenge</Text>
  </View>
)

export function Login({ navigation }: any) {

  // SUB COMPONENT - LOGIN CONTA
  const login = () => (
    <View style={styles.login}>
      <View style={styles.createAccountContainer}>
        <TouchableButton
          title='Criar Conta'
          onPress={() => {navigation.navigate("SignUp")}}
          padding={10}
          borderWidth={2}
          backgroundColor={COLORS.mustard}
        />
      </View>
      <View style={styles.alreadyAccountContainer}>
        <Text style={styles.alreadyAccount}>Já tem uma conta?</Text>
        <TouchableButton
          title='Entrar'
          onPress={() => {navigation.navigate("SignIn")}}
          backgroundColor='transparent'
          fontSize={16}
          fontFamily='Montserrat-SemiBold'
          textStyle={{
            color: "red",
            marginLeft: 10
          }}
        />
      </View>
    </View>
  )
  return (
    <View style={styles.container}>
      {iconLogin()}
      {welcomeMessage()}
      {login()}
    </View>
  );
}