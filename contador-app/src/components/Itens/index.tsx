import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';

import { styles } from './style';

interface ItensProps {
  icon: any
  labelName: string
  name?: string
  colorStyle?: string
  onPress?: () => void
  url?: string
  disabled?: boolean
}

export function Itens({
  icon,
  labelName,
  name,
  colorStyle = "#fff",
  onPress,
  url,
  disabled = false
}: ItensProps) {
  const handlePress = () => {
    if (!disabled && url) {
      Linking.openURL(url);
    } else if (onPress) {
      onPress();
    }
  };

  const itemStyle = disabled ? [styles.infoText, { color: '#888' }] : [styles.infoText, { color: colorStyle }];
  const textStyle = disabled ? [styles.text, {color: "#888"}] : [styles.text, {color: colorStyle}]

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon}
      </View>
      <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }} onPress={handlePress} disabled={disabled}>
        <Text style={itemStyle}>{labelName}</Text>
        {name && <Text style={textStyle}>{name}</Text>}
      </TouchableOpacity>
    </View>
  );
}
