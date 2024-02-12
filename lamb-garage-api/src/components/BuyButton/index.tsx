import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';
import { AntDesign } from "@expo/vector-icons"

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color={"white"}
          style={styles.icon}
        />
        <Text style={styles.buttonText}> Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}