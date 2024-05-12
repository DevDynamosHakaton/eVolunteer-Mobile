import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize} from '../../constants/Global';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    marginBottom: 12,
  },
  titleText: {
    fontSize: FontSize.size28,
    marginLeft: '5%',
  },
  cardInfoContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0.5,
    paddingHorizontal: '5%',
    paddingVertical: 12,
    borderRadius: 22,
    gap: 3,
    marginBottom: 12,
  },
  cardName: {
    fontSize: FontSize.size22,
    fontWeight: '500',
    marginBottom: 22,
  },

  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 12,
  },
  buttonText: {
    fontSize: FontSize.size20,
    borderBottomWidth: 1,
    borderColor: '#000',
    textDecorationLine: 'underline',
  },
  onPress: {
    opacity: 0.5,
  },
});

export const iconSize = DeviceSize.width * 0.08;
export const penSize = DeviceSize.width * 0.06;
