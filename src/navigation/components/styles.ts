import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize, GlobalColors} from '../../constants/Global';

export const styles = StyleSheet.create({
  activeIconContainer: {
    backgroundColor: GlobalColors.body50,
    borderRadius: 50,
    marginTop: 7,
  },
  iconContainer: {
    borderRadius: 50,
    marginTop: 7,
  },
  tabSceneContainerStyle: {
    backgroundColor: GlobalColors.primary50,
  },
  text: {
    color: '#FFF',
    paddingTop: 1,
    fontSize: FontSize.size14,
  },
});

export const iconSize = DeviceSize.width * 0.11;
