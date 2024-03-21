import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    paddingTop: 40
  },
  infosContainer: {
    width: "92%",
    flex: 1,
    marginTop: 40,
  },
  labelText: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Montserrat-Bold"
  },
  textContainer: {
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 16,
    letterSpacing: .6,
    fontFamily: "Montserrat-Medium"
  }
});