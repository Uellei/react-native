import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './style';

interface ItensProps {
  icon: any
  labelName: string
  name?: string
  colorStyle?: string
  onPress?: () => void
}

export function Itens({
  icon,
  labelName,
  name,
  colorStyle = "#fff",
  onPress
}: ItensProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon}
      </View>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={onPress}>
        <Text style={[styles.infoText, {color: colorStyle }]}>{labelName}</Text>
        {name ? (
          <Text style={[styles.text]}>{name}</Text>
        ) : ""}
      </TouchableOpacity>
    </View>
  );
}