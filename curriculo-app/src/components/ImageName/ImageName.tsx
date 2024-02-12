import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './ImageNameStyles';

interface ImageNameProps {
  name: string
}

export function ImageName({name}: ImageNameProps) {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/foto.jpeg")}
        style={styles.image}
        resizeMode='cover'
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}