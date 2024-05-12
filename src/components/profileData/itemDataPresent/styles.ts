import {StyleSheet} from 'react-native';
import {FontSize} from '../../../constants/Global';

export const styles = StyleSheet.create({
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstText: {
    fontSize: FontSize.size22,
  },
  secondText: {
    fontSize: FontSize.size18,
    marginRight: 7,
  },
  onPress: {
    opacity: 0.65,
  },
});
