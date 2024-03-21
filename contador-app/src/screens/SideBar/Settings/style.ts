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
  labelContainer: {
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
  textOption: {
    fontSize: 26,
    color: "#fff",
    marginTop: 20,
    fontFamily: "Montserrat-SemiBold"
  },
  text: {
    color: "#fff",
    fontSize: 26,
    // fontWeight: "bold"
    fontFamily: "Montserrat-Bold"
  },
  infoText: {
    color: "#fff",
    textAlign: "left",
    marginLeft: 10,
    fontSize: 18
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalItem: {
    backgroundColor: "#000",
    paddingVertical: 18,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: "row"
  },
  modalText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Montserrat-Regular"
  }
});