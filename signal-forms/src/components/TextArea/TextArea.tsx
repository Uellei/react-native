import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

export function TextArea() {
  return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Yout text here...'
      />
    </View>
  );
}