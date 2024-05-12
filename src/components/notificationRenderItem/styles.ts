import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    marginBottom: 12,
    borderRadius: 12,
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '60%',
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
    width: '100%',
  },
  locationText: {
    fontSize: FontSize.size16,
    width: '80%',
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
