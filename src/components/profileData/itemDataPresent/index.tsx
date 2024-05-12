import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import RNPickerSelect from 'react-native-picker-select';

interface ItemDataPresentParams {
  icon?: any;
  data?: string | null;
  name?: string | null;
  items: any;
  saveNewData: (data: any) => void;
}

export default function ItemDataPresent({
  name,
  icon,
  data,
  items,
  saveNewData,
}: ItemDataPresentParams) {
  const [chosenData, setChosenData] = useState<string>('');

  function saveDataPressHandler() {
    saveNewData(chosenData);
  }

  return (
    <View style={styles.lineContainer}>
      <Text style={styles.firstText}>{name}</Text>

      {icon ? (
        <RNPickerSelect
          onValueChange={value => setChosenData(value)}
          onDonePress={saveDataPressHandler}
          items={items}>
          <View style={styles.lineContainer}>
            <Text style={styles.secondText}>{data}</Text>
            {icon}
          </View>
        </RNPickerSelect>
      ) : (
        <View style={styles.lineContainer}>
          <Text style={styles.secondText}>{data}</Text>
          {icon}
        </View>
      )}
    </View>
  );
}
