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
    fontFamily: "Montserrat-Bold"
  },
});