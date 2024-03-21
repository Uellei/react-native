import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './style';
import { InputTextProps } from './props';

// SUB COMPONENT
const textInput = (placeholder: string) => (
  <View style={styles.textInputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={"#fff"}
    />
  </View>
)

export function InputText({placeholders, onChangeTextFunctions, secureTextEntries, style}: InputTextProps) {
  return (
    <View>
      {placeholders.map((placeholder, index) => (
        <View key={index} style={styles.textInputContainer}>
          <TextInput
            style={[styles.textInput, style]}
            placeholder={placeholder}
            placeholderTextColor={"#fff"}
            onChangeText={onChangeTextFunctions[index]}
            secureTextEntry={secureTextEntries[index] || false}
          />
        </View>
      ))}
    </View>
  );
}