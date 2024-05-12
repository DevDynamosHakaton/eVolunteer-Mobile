import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize, GlobalColors} from '../../constants/Global';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: GlobalColors.primary50,
  },
  headerContainer: {
    backgroundColor: GlobalColors.primary700,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    fontSize: FontSize.size26,
    textAlign: 'center',
    color: '#FFF',
    paddingBottom: 12,
  },
  itemContainer: {
    gap: 12,
    flex: 1,
    marginTop: 12,
  },
});

export const iconSize = DeviceSize.width * 0.07;
