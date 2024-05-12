import React from 'react';
import {Pressable, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {styles} from './styles';
import useDataHook, {id} from './hooks';
import ButtonStandard from '../../components/buttonStandard';
import {FontSize, GlobalColors} from '../../constants/Global';

export function MapScreen() {
  const {eventData, setModalDataPressHandler, modalData, joinPressHandler} =
    useDataHook();

  return (
    <View style={styles.screenContainer}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        mapType='hybrid'
        showsMyLocationButton
        showsUserLocation
        region={{
          latitude: 48.884455,
          longitude: 38.52491,
          latitudeDelta: 3,
          longitudeDelta: 3,
        }}>
        {eventData &&
          eventData.map((event, index) => (
            <Marker
              key={index}
              coordinate={{latitude: event.lat, longitude: event.lng}}
              onPress={() => setModalDataPressHandler(event)}
            />
          ))}
      </MapView>

      {modalData && (
        <Pressable
          onPress={() => setModalDataPressHandler(undefined)}
          style={styles.backGround}
        />
      )}

      <View style={modalData ? styles.modalContainer : styles.hiddenModal}>
        <View style={styles.lineContainer}>
          <Text style={styles.eventName}>{modalData?.name}</Text>

          <Text style={styles.dataText}>{modalData?.createdAt}</Text>
        </View>

        <View>
          <Text style={styles.locationTitle}>Розташування:</Text>

          <Text style={styles.locationName}>{modalData?.address}</Text>
        </View>

        <View>
          <Text style={styles.locationTitle}>Опис події:</Text>

          <Text style={styles.locationName}>{modalData?.description}</Text>
        </View>

        {modalData && (
          <>
            <ButtonStandard
              width={'90%'}
              fontSize={FontSize.size20}
              backgroundColor={GlobalColors.primary700}
              color={GlobalColors.primary50}
              text={
                modalData.volunteers && modalData.volunteers[id]
                  ? 'Відлучитись'
                  : 'Долучитись'
              }
              borderWidth={0}
              onPress={() => joinPressHandler(modalData.uid)}
            />

            <ButtonStandard
              width={'90%'}
              fontSize={FontSize.size20}
              backgroundColor={'transparent'}
              color={'#000'}
              text={'Приховати'}
              borderWidth={1}
              onPress={() => setModalDataPressHandler(undefined)}
            />
          </>
        )}
      </View>
    </View>
  );
}
