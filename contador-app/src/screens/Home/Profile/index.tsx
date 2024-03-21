import React, { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './style';
import { AsyncImage } from '../../../components/AsyncImage';
import { useAuth } from '../../../context/UserAuthContext';

export function Profile({navigation}: any) {
  const { currentUser } = useAuth()
  console.log(currentUser)
  const displayName = currentUser?.displayName ? currentUser.displayName : ""

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
        name="settings-outline"
        size={20}
        color="#fff"
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate("Configurações")}
        />
      )
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.infosContainer}>
        <View style={styles.imageContainer}>
          <AsyncImage nome={displayName} userId={currentUser?.uid} style={{ height: 80, width: 80, borderRadius: 50}} />
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 20, color: "#fff", fontFamily: "Montserrat-Bold", textAlign: "center"}}>{displayName}</Text>
            <Text style={{ fontSize: 16, color: "#fff", fontFamily: "Montserrat-Light", textAlign: "center", marginTop: 5}}>Atividades</Text>
          </View>
        </View>
      </View>
    </View>
  );
}