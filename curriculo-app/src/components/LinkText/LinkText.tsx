import React from 'react';
import { View, Text, Linking } from 'react-native';

import { styles } from './LinkTextStyles';

interface LinkTextProps {
  url: string,
  text: string
}

export function LinkText({url, text}: LinkTextProps) {

  const handleOpenUrl = (LinkUrl: string) => {
    Linking.openURL(LinkUrl)
  }

  const handlePress = () => {
    handleOpenUrl(url)
  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
        onPress={handlePress}
      >
        {text}
      </Text>
    </View>
  );
}