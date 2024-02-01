import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#000",
    borderRadius: 3,
    elevation: 13,
    marginTop: 5
  },
  text: {
    fontSize: 17,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#fff"
  },
  viewPass: {
    width: "100%",
    borderWidth: 1,
    borderColor: "red"
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10
  },
  container: {
    backgroundColor: "#313440",
    marginTop: 20,
    borderRadius: 7
  },
  textContainer: {
    color: "grey",
    marginLeft: 10,
    marginTop: 5,
    fontSize: 16
  },
  containerNumber: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  label: {
      fontSize: 17,
      color: "#fff",
      fontWeight: "bold"
  },
  numberContainer: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  value: {
      marginHorizontal: 20,
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold"
  },
  buttonNumber: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e7e7e7',
      borderRadius: 15
  },
  buttonText: {
      fontSize: 18,
      color: '#000',
  },
});