import React from 'react';
import {Pressable, Text} from 'react-native';
import GoogleSvg from '../../../assets/svg/button/GoogleButton.svg';
import {iconSize, styles} from './styles';

interface GoogleButtonParams {
  onPress: () => void;
}

export default function GoogleButton({onPress}: GoogleButtonParams) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonContainer,
        pressed && styles.onPress,
      ]}>
      <GoogleSvg fill={'#FFF'} width={iconSize} height={iconSize} />

      <Text style={styles.name}>Google</Text>
    </Pressable>
  );
}
