import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';

import DatePicker from 'react-native-date-picker';

interface ItemChoseDataParams {
  icon?: any;
  data?: any;
  name?: string | null;
  saveNewData: (data: any) => void;
}

export default function ItemChoseData({
  name,
  icon,
  data,
  saveNewData,
}: ItemChoseDataParams) {
  const [open, setOpen] = useState<boolean>(false);
  const parseDateFromString = (dateString: string): Date => {
    return new Date(dateString);
  };

  return (
    <View style={styles.lineContainer}>
      <Text style={styles.firstText}>{name}</Text>

      <Pressable
        onPress={() => setOpen(true)}
        style={({pressed}) => [
          styles.lineContainer,
          pressed && styles.onPress,
        ]}>
        <Text style={styles.secondText}>{data}</Text>
        {icon}
      </Pressable>

      <DatePicker
        modal
        open={open}
        date={data ? parseDateFromString(data) : new Date('2023-12-31')}
        onConfirm={date => {
          setOpen(false);
          saveNewData(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
      />
    </View>
  );
}
