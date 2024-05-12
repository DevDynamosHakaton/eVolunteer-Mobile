import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import ButtonStandard from '../../buttonStandard';
import {GlobalColors} from '../../../constants/Global';
import auth from '@react-native-firebase/auth';

interface LogOutModalParams {
  setShowLogOutModalState: (state: boolean) => void;
}

export default function LogOutModal({
  setShowLogOutModalState,
}: LogOutModalParams) {
  function logOutPressHandler() {
    auth().signOut();
  }

  return (
    <>
      <View style={styles.modalContainer}>
        <Text style={styles.titleText}>Вийти з додатку?</Text>

        <View style={styles.buttonLineContainer}>
          <ButtonStandard
            width={'40%'}
            fontSize={0}
            backgroundColor={'transparent'}
            color={''}
            text={'Скасувати'}
            borderWidth={1}
            onPress={() => setShowLogOutModalState(false)}
          />

          <ButtonStandard
            width={'40%'}
            fontSize={0}
            borderWidth={0}
            backgroundColor={GlobalColors.primary700}
            color={'#FFF'}
            text={'Вийти'}
            onPress={logOutPressHandler}
          />
        </View>
      </View>

      <Pressable
        style={styles.modalBackGround}
        onPress={() => setShowLogOutModalState(false)}
      />
    </>
  );
}
