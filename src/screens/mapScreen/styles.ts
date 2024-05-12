import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize} from '../../constants/Global';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backGround: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#00000060',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: '5%',
    paddingTop: 12,
    minHeight: DeviceSize.hight * 0.33,
    justifyContent: 'space-around',
    overflow: 'hidden',
    gap: 12,
    paddingBottom: 12,
  },
  hiddenModal: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: '5%',
    height: 0,
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventName: {
    fontSize: FontSize.size28,
  },
  dataText: {
    fontSize: FontSize.size18,
    color: '#00000060',
  },
  locationTitle: {
    fontSize: FontSize.size16,
    color: '#00000080',
    fontWeight: '500',
  },
  locationName: {
    fontSize: FontSize.size22,
  },
});
