import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 50
  },
  infoText: {
    color: "#fff",
    textAlign: "left",
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold"
  },
  text: {
    color: "#fff",
    textAlign: "left",
    marginLeft: 10,
    fontSize: 14,
    fontFamily: "Montserrat-Medium"
  }
});