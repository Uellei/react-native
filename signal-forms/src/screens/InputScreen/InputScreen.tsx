import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Label } from '../../components/Label/Label'
import { TextArea } from '../../components/TextArea/TextArea'


export function InputScreen() {
  return (
    <View style={styles.container}>
      <Label />
      <Text style={{ marginVertical: 20, fontWeight: "bold", fontSize: 20 }}>Label</Text>
      <Label />
      <Text style={{ marginVertical: 20, fontWeight: "bold", fontSize: 20 }}>This is your hint</Text>
      <TextArea />
      <Text style={{ marginVertical: 20, fontWeight: "bold", fontSize: 20 }}>Label</Text>
      <TextArea />
      <TouchableOpacity>
        <Text style={styles.text}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}