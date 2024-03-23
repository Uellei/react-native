import { StyleSheet } from 'react-native';
import { COLORS, WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../../../constants/styles';



export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark
  },
  count: {
    alignItems: "center",
    height: WINDOW_HEIGHT/3,
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  num: {
    justifyContent: "center",
    alignItems: "center",
    height: WINDOW_HEIGHT/1.5,
  }
});