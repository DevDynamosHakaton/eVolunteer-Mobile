import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize} from '../../../constants/Global';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '70%',
    borderWidth: 1,
    paddingHorizontal: '5%',
    paddingVertical: 12,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderColor: '#FFF',
  },
  name: {
    fontSize: FontSize.size22,
    marginLeft: 12,
    fontWeight: '500',
    color: '#FFF',
  },
  onPress: {
    opacity: 0.5,
  },
});

export const iconSize = DeviceSize.width * 0.07;
