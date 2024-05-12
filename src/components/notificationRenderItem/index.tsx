import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {iconSize, styles, trashBinSize} from './styles';
import FireSvg from '../../assets/svg/emergency_icons.svg';
import DeleteSvg from '../../assets/svg/trash.svg';

interface NotificationRenderItemParams {
  item: {
    address: string;
    description: string;
    id: string;
    lat: number;
    lng: number;
    name: string;
    status: number;
    type: string;
    volunteersAskAmount: number;
    createdAt: string;
    uid: string;
  };
  deleteCurrentItem: (uid: string) => void;
}

export default function NotificationRenderItem({
  item,
  deleteCurrentItem,
}: NotificationRenderItemParams) {
  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        <FireSvg
          style={styles.svgContainer}
          width={iconSize}
          height={iconSize}
        />

        <View>
          <Text numberOfLines={1} style={styles.nameText}>
            {item.name}
          </Text>
          <Text numberOfLines={1} style={styles.locationText}>
            {item.address}
          </Text>
        </View>
      </View>

      <View style={styles.rightPart}>
        <Text>{item.createdAt}</Text>
        <Pressable
          onPress={() => deleteCurrentItem(item.uid)}
          hitSlop={12}
          style={({pressed}) => pressed && styles.onPress}>
          <DeleteSvg
            width={trashBinSize}
            height={trashBinSize}
            style={styles.deleteSvg}
            fill={'#851f1fc7'}
          />
        </Pressable>
      </View>
    </View>
  );
}
