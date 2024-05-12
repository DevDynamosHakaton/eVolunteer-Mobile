import React from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import useDataHook from './hooks';
import {iconSize, styles, trashBinSize} from './styles';
import NotificationRenderItem from '../../components/notificationRenderItem';
import EmptySvg from '../../assets/svg/empty.svg';
import DeleteSvg from '../../assets/svg/trash.svg';

interface Message {
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
}

export function NotificationScreen() {
  const {eventData, deleteAllPressHandler, deleteCurrentItem} = useDataHook();

  const renderItem = ({item}: {item: Message}) => (
    <NotificationRenderItem
      item={item}
      deleteCurrentItem={props => deleteCurrentItem(props)}
    />
  );

  const keyExtractor = (item: Message, index: number) => item.id + index;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.titleContainer}>
        <Text style={styles.titleText}>Сповіщення</Text>

        <Pressable
          onPress={deleteAllPressHandler}
          hitSlop={12}
          style={({pressed}) => pressed && styles.onPress}>
          <DeleteSvg
            width={trashBinSize}
            height={trashBinSize}
            style={styles.deleteSvg}
            fill={'#FFFFFF60'}
          />
        </Pressable>
      </SafeAreaView>

      <FlatList
        style={styles.flatListCOntainer}
        data={eventData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        scrollEnabled={true}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <EmptySvg fill={'#00000060'} width={iconSize} height={iconSize} />
            <Text style={styles.emptyText}>Сповіщень немає</Text>
          </View>
        }
      />
    </View>
  );
}
