import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    alignItems: "center",
    paddingTop: 40
  },
  infosContainer: {
    width: "98%",
    flex: 1,
    marginTop: 40,
  },
});