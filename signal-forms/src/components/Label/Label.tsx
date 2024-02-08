import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

export function Label() {
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Text'
      />
    </View>
  );
}