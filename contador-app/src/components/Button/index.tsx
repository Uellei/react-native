import React from "react";
import { Text, TextStyle, ViewStyle, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: () => void
  title: string
  style?: ViewStyle
  textStyle?: TextStyle
  backgroundColor?: string
  borderRadius?: number
  borderColor?: string
  borderWidth?: number
  padding?: number
  textAlign?: "auto" | "center" | "left" | "right" | "justify"
  fontSize?: number
  fontFamily?: "Montserrat-Light" | "Montserrat-Medium" | "Montserrat-Regular" | "Montserrat-SemiBold" | "Montserrat-Bold"
}


export const TouchableButton = ({
  onPress,
  title,
  style,
  textStyle,
  backgroundColor = "#fff",
  borderRadius = 10,
  borderColor = "#fff",
  borderWidth,
  padding,
  textAlign = "center",
  fontSize = 24,
  fontFamily = "Montserrat-Bold"
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    style={[
      style,
      {
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: borderWidth,
        padding: padding,
      }
    ]}
  >
    <Text style={[
      textStyle,
      {
        textAlign: textAlign,
        fontSize: fontSize,
        fontFamily: fontFamily,
      },
    ]}
    >{title}</Text>
  </TouchableOpacity>
)