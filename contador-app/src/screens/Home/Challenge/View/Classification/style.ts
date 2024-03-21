import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../constants/styles';

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
  infoChallengeContainer: {
    marginTop: 20,
    backgroundColor: "brown",
    borderRadius: 10,
    flexDirection: "row",
    padding: 20
  },
  info: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  infoImage: {
    borderRadius: 50,
    height: 40,
    width: 40
  },
  infoText: {
    color: "#fff",
    textAlign: "left",
    marginLeft: 10
  }
});