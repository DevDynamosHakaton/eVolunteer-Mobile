import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize, GlobalColors} from '../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    backgroundColor: GlobalColors.primary700,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: FontSize.size24,
    textAlign: 'center',
    paddingBottom: 12,
    fontWeight: '500',
    letterSpacing: 3,
    marginLeft: '5%',
  },
  deleteSvg: {
    marginRight: '5%',
  },
  flatListCOntainer: {
    flex: 1,
    paddingTop: 16,
  },
  emptyContainer: {
    height: DeviceSize.hight * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: FontSize.size28,
    color: '#00000060',
  },
  onPress: {
    opacity: 0.65,
  },
});

export const iconSize = DeviceSize.width * 0.4;

export const trashBinSize = DeviceSize.width * 0.07;
