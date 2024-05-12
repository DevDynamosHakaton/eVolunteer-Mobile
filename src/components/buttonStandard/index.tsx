import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface GoogleButtonParams {
  width: any;
  fontSize: number;
  backgroundColor: string;
  color: string;
  text: string;
  borderWidth: number;
  onPress: () => void;
}

export default function ButtonStandard({
  width,
  backgroundColor,
  color,
  text,
  fontSize,
  borderWidth,
  onPress,
}: GoogleButtonParams) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {width, backgroundColor, borderWidth},
        styles.container,
        pressed && styles.onPress,
      ]}>
      <Text style={[styles.text, {color, fontSize}]}>{text}</Text>
    </Pressable>
  );
}
