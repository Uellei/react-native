import { StyleSheet } from 'react-native';

import { COLORS, WINDOW_HEIGHT } from '../../../constants/styles';

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
    alignItems: "center"
  },
  createText: {
    color: "#fff",
    // fontWeight: "bold",
    fontFamily: "Montserrat-Bold",
    fontSize: 24
  },
  infoText: {
    color: "#fff",
    // fontWeight: "200",
    fontFamily: "Montserrat-Light",
    fontSize: 16
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20
  },
  image: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff",
    width: 150,
    height: 150,
    overflow: "hidden",
    resizeMode: "contain"
  },
  signUpContainer: {
    borderWidth: 2,
    borderColor: "#fff",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  signUpText: {
    textAlign: "center",
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "Montserrat-Bold"
  },
  signUp: {
    justifyContent: "space-between",
    width: "100%",
  },
  //
  //
  //
  avatar: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: WINDOW_HEIGHT / 40
  },
  imagee: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 100,
  },
  initialContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  initial: {
    color: '#fff',
    fontSize: 80,
  },
  iconContainer: {
    position: 'absolute',
    bottom: -15,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#000',
    fontSize: 18,
  }
});