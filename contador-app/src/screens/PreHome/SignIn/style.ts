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
  signInText: {
    color: "#fff",
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Montserrat-Bold"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 16,
    // fontWeight: "200"
    fontFamily: "Montserrat-Light"
  },
  signIn: {
    width: "100%",
  }
});