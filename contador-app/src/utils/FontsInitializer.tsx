import React, { useCallback } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const FontsInitializer = ({ children }: any) => {
  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Medium': require('../../assets/fonts/Montserrat/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat/Montserrat-Bold.ttf'),
    'Montserrat-SemiBold': require('../../assets/fonts/Montserrat/Montserrat-SemiBold.ttf'),
    'Montserrat-Light': require('../../assets/fonts/Montserrat/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('../../assets/fonts/Montserrat/Montserrat-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if (!fontsLoaded && !fontError) {
    // Mostrar um componente de carregamento enquanto as fontes estão sendo carregadas
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FontsInitializer;
