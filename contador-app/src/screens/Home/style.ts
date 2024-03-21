import { StyleSheet } from 'react-native';
import { COLORS, WINDOW_HEIGHT } from '../../constants/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    alignItems: "center"
  },
  icon: {
    marginTop: WINDOW_HEIGHT/5,
    height: WINDOW_HEIGHT/2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: 30
  },
  button: {
    width: 150,
    borderWidth: 1,
    borderColor: "white",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    // fontWeight: "bold"
    fontFamily: "Montserrat-Bold"
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    // fontWeight: "300",
    fontFamily: "Montserrat-Regular",
    width: "80%",
    textAlign: "center"
  }
});