import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export const DeviceSize = {
  width: Dimensions.get('window').width,
  hight: Dimensions.get('window').height,
};

export const GlobalColors = {
  primary50: '#E7E9EF',
  primary100: '#B3BCCC',
  primary200: '#8F9BB3',
  primary300: '#5C6E90',
  primary400: '#3C517B',
  primary500: '#0B265A',
  primary600: '#0A2352',
  primary700: '#081B40',
  primary800: '#061532',
  primary900: '#051026',
  body50: '#FFFFFF',
  body100: '#E5E5E5',
  body200: '#CCCCCC',
  body300: '#B2B2B2',
  body400: '#999999',
  body500: '#808080',
  body600: '#666666',
  body700: '#2B2F34',
  body800: '#1D1F22',
  body900: '#1D1F22',
};

export const FontSize = {
  size10: RFValue(10, 932),
  size12: RFValue(12, 932),
  size14: RFValue(14, 932),
  size16: RFValue(16, 932),
  size18: RFValue(18, 932),
  size20: RFValue(20, 932),
  size22: RFValue(22, 932),
  size24: RFValue(24, 932),
  size26: RFValue(26, 932),
  size28: RFValue(28, 932),
  size30: RFValue(30, 932),
  size32: RFValue(32, 932),
  size34: RFValue(34, 932),
  size36: RFValue(36, 932),
  size38: RFValue(38, 932),
  size40: RFValue(40, 932),
};
