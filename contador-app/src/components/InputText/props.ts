import { StyleProp, TextStyle } from "react-native"

export interface InputTextProps {
  placeholders: string[]
  onChangeTextFunctions: ((text: string) => void)[]
  secureTextEntries: boolean[]
  style?: StyleProp<TextStyle>
}