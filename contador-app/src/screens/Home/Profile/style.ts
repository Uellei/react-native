import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    paddingTop: 40
  },
  infosContainer: {
    width: "92%",
    flex: 1,
    marginTop: 40,
  },
  imageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});