import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/styles';

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
  text: {
    color: "#fff",
    fontSize: 26,
    // fontWeight: "bold"
    fontFamily: "Montserrat-Bold"
  },
  infosChallengeContainer: {
    borderWidth: 2,
    borderColor: "#fff",
    marginTop: 30,
    padding: 20,
    borderRadius: 10
  },
  infoText: {
    borderColor: "#fff",
    borderWidth: 2,
    padding: 10,
    fontSize: 20,
    color: "#fff",
    // fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
    borderRadius: 10,
    marginTop: 10
  },
  button: {
    backgroundColor: "#fff",
    marginTop: 60,
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    // fontWeight: "bold"
    fontFamily: "Montserrat-Bold"
  }
});