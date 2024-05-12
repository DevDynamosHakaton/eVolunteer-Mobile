import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

interface GoogleButtonParams {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

export default function TextInputLogin({
  value,
  placeholder,
  onChangeText,
}: GoogleButtonParams) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#FFFFFF80'}
        style={styles.textInput}
      />
    </View>
  );
}
