import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize, GlobalColors} from '../../../constants/Global';
export const styles = StyleSheet.create({
  screenContainer: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderRadius: 20,
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  iconContainer: {
    padding: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalColors.primary500,
  },
  infoText: {
    fontSize: FontSize.size22,
    marginLeft: 12,
    fontWeight: '600',
  },
  onPress: {
    opacity: 0.65,
  },
});

export const iconSize = DeviceSize.width * 0.1;
