import {StyleSheet} from 'react-native';
import {DeviceSize, FontSize, GlobalColors} from '../../constants/Global';

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: FontSize.size34,
    letterSpacing: 7,
    fontWeight: '600',
    marginTop: DeviceSize.hight * 0.07,
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
  },
  infoText: {
    textAlign: 'center',
    fontSize: FontSize.size32,
    letterSpacing: 7,
    fontWeight: '600',
    color: '#FFF',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
  },
  registerContainer: {
    paddingTop: 20,
    height: DeviceSize.hight * 0.55,
    justifyContent: 'space-between',
    backgroundColor: GlobalColors.primary700,
    paddingBottom: DeviceSize.hight * 0.03,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  loginContainer: {
    paddingTop: 20,
    height: DeviceSize.hight * 0.45,
    justifyContent: 'space-between',
    backgroundColor: GlobalColors.primary700,
    paddingBottom: DeviceSize.hight * 0.03,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
