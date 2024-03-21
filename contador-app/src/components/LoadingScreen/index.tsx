import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";


export const LoadingScreen = ({ message }: any) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff"/>
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold"
  }
})