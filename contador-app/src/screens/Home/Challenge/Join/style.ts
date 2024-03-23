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
  text: {
    color: "#fff",
    fontSize: 26,
    fontFamily: "Montserrat-Bold"
  },
  info: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  infoImage: {
    backgroundColor: "#000",
    borderRadius: 100,
    height: 40,
    width: 40
  },
  infoText: {
    color: "#fff",
    marginLeft: 10,
  }
});
