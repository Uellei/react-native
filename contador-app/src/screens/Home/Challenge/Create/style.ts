import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/styles';

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
  bannerImageContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    width: "100%",
    height: 140,
    borderRadius: 10,
    backgroundColor: "#fff",
    opacity: 0.3,
    marginTop: 20
  },
  bannerImage: {

  },
  textInput: {
    borderColor: "#fff",
    borderWidth: 2,
    marginTop: 30,
    width: "100%",
    borderRadius: 7,
    padding: 10,
    color: "#fff"
  },
  dateInput: {
    color: "#fff",
    fontSize: 20,
    padding: 10,
    // fontWeight: "200"
    fontFamily: "Montserrat-Light"
  },
  dateContainer: {
    borderWidth: .5,
    borderColor: "#fff",
    borderRadius: 5,
    marginTop: 25
  }
});