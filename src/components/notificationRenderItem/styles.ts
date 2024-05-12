import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    marginBottom: 12,
    borderRadius: 12,
    paddingHorizontal: '3%',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstText: {
    fontSize: FontSize.size22,
  },
  secondText: {
    fontSize: FontSize.size18,
    marginRight: 7,
  },
  svgContainer: {
    marginRight: 12,
  },
  nameText: {
    fontSize: FontSize.size18,
    width: '90%',
  },
  locationText: {
    fontSize: FontSize.size16,
    width: '90%',
    color: '#000000c7',
  },
  rightPart: {
    alignItems: 'flex-end',
  },
  deleteSvg: {},
  onPress: {
    opacity: 0.65,
  },
});

export const iconSize = DeviceSize.width * 0.14;

export const trashBinSize = DeviceSize.width * 0.06;
