import {StyleSheet} from 'react-native';
import {FontSize} from '../../../constants/Global';

export const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    top: '50%',
    backgroundColor: '#FFF',
    zIndex: 1,
    borderRadius: 20,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: FontSize.size26,
    fontWeight: '500',
    marginVertical: 12,
    marginBottom: 33,
  },
  buttonLineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 7,
  },
  modalBackGround: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#00000060',
  },
});
