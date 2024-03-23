import { StyleSheet } from 'react-native';

import { COLORS, WINDOW_HEIGHT } from '../../../constants/styles'; 

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark,
    flex: 1,
    alignItems: "center",
  },
  loginLogo: {
    marginTop: WINDOW_HEIGHT/4.5,
    height: WINDOW_HEIGHT/2.1,
    width: "95%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
  welcome: {
    height: WINDOW_HEIGHT/10,
    marginTop: 20
  },
  welcomeText: {
    color: "#fff",
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
  },
  login: {
    width: "90%",
    height: WINDOW_HEIGHT/6.5,
    alignItems: "center",
    justifyContent: "space-between"
  },
  createAccountContainer: {
    width: "90%",
  },
  alreadyAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "90%",
    paddingBottom: 10
  },
  alreadyAccount: {
    color: "#fff",
    fontSize: 16,
    // fontWeight: "600"
    fontFamily: "Montserrat-SemiBold"
  }
});