import React, {useState} from 'react';
import {Linking, SafeAreaView, Text, View} from 'react-native';
import {iconSize, styles} from './styles';
import HistorySvg from '../../assets/svg/profileMenuScreen/history.svg';
import ProfileSvg from '../../assets/svg/profileMenuScreen/profile.svg';
import SupportSvg from '../../assets/svg/profileMenuScreen/support.svg';
import MenuOptionItem from '../../components/profileMenuScreen/menuOptionItem';
import ButtonStandard from '../../components/buttonStandard';
import {FontSize, GlobalColors} from '../../constants/Global';
import LogOutModal from '../../components/profileMenuScreen/logOutModal';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ProfileStackParamList, Routes} from '../../navigation/types';
import {useSelector} from 'react-redux';
import {RootState} from '../../state/store';

export function ProfileMenuScreen() {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
  const [showLogOutModalState, setShowLogOutModalState] =
    useState<boolean>(false);
  const profileData = useSelector((state: RootState) => state.profile);

  async function openHelperPressHandler() {
    await Linking.openURL('https://dsns.gov.ua');
  }

  return (
    <View style={styles.screenContainer}>
      <SafeAreaView style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Привіт, {profileData.firstName}</Text>
      </SafeAreaView>

      <View style={styles.itemContainer}>
        <MenuOptionItem
          icon={<ProfileSvg width={iconSize} height={iconSize} />}
          text={'Мої дані'}
          onPress={() => navigation.navigate(Routes.ProfileDataScreen)}
        />

        {/* <MenuOptionItem
          icon={<HistorySvg width={iconSize} height={iconSize} />}
          text={'Історія залучень'}
          onPress={() => {}}
        /> */}

        <MenuOptionItem
          icon={<SupportSvg width={iconSize} height={iconSize} />}
          text={'Служба підтримки'}
          onPress={openHelperPressHandler}
        />
      </View>

      <ButtonStandard
        width={'90%'}
        fontSize={FontSize.size24}
        backgroundColor={GlobalColors.primary700}
        color={GlobalColors.primary50}
        text={'Вийти'}
        onPress={() => setShowLogOutModalState(true)}
        borderWidth={0}
      />

      {showLogOutModalState && (
        <LogOutModal setShowLogOutModalState={setShowLogOutModalState} />
      )}
    </View>
  );
}
