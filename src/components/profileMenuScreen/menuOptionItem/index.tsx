import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

interface MenuOptionItemParams {
  icon: React.ReactNode;
  onPress: () => void;
  accessibilityLabel?: string;
  text: string;
}

export default function MenuOptionItem({
  icon,
  onPress,
  accessibilityLabel,
  text,
}: MenuOptionItemParams) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      style={({pressed}) => [
        styles.screenContainer,
        pressed && styles.onPress,
      ]}>
      <View style={styles.iconContainer}>{icon}</View>

      <Text style={styles.infoText}>{text}</Text>
    </Pressable>
  );
}
