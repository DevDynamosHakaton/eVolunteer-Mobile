import {StyleSheet} from 'react-native';
import {DeviceSize, GlobalColors} from '../constants/Global.ts';

export const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: GlobalColors.primary700,
    paddingHorizontal: '7%',
    paddingBottom: 0,
    height: DeviceSize.hight * 0.11,
  },
});
