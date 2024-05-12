import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize} from '../../../constants/Global';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF60',
    marginVertical: 12,
  },
  textInput: {
    width: '90%',
    paddingHorizontal: '2.5%',
    fontSize: FontSize.size22,
    paddingVertical: 7,
    color: '#FFF',
  },
});

export const iconSize = DeviceSize.width * 0.07;
