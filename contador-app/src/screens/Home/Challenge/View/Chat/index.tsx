import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './style';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../../services/firebaseConfig';

export function BatePapo({navigation}: any) {
  const signOutUser = async() => {
    await signOut(auth).then(() => {
      navigation.navigate("Login")
    })
  }

  return (
    <View style={styles.container}>
    </View>
  );
}