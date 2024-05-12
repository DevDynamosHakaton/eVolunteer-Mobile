import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import BackArrowSvg from '../../assets/svg/backArrow.svg';
import {iconSize, penSize, styles} from './styles';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {ProfileStackParamList, Routes} from '../../navigation/types';
import PenSvg from '../../assets/svg/pen.svg';
import {useSelector} from 'react-redux';
import {RootState} from '../../state/store';
import ItemDataPresent from '../../components/profileData/itemDataPresent';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import ItemChoseData from '../../components/profileData/itemChoseData';

type ProfileDataScreenProps = {
  route: RouteProp<ProfileStackParamList, Routes.ProfileDataScreen>;
};

export const ProfileDataScreen: React.FC<ProfileDataScreenProps> = () => {
  const navigation = useNavigation<NavigationProp<ProfileStackParamList>>();
  const profileData = useSelector((state: RootState) => state.profile);
  const {
    birthDate,
    firstName,
    middleName,
    lastName,
    nationality,
    sex,
    email,
    status,
  } = profileData;

  function changeStatus(props: any) {
    if (props !== 'null') {
      const id = auth().currentUser?.uid;
      database().ref(`/users/${id}/status`).set(props);
    }
  }

  function changeCountry(props: any) {
    if (props !== 'null') {
      const id = auth().currentUser?.uid;
      database().ref(`/users/${id}/nationality`).set(props);
    }
  }

  function changeSex(props: any) {
    if (props !== 'null') {
      const id = auth().currentUser?.uid;
      database().ref(`/users/${id}/sex`).set(props);
    }
  }

  async function changeBirthday(props: any) {
    if (props !== 'null') {
      try {
        const id = auth().currentUser?.uid;
        const newBirthday = props.toISOString().substring(0, 10);

        database().ref(`/users/${id}/birthDate`).set(newBirthday);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <Pressable
          hitSlop={22}
          style={({pressed}) => pressed && styles.onPress}
          onPress={() => navigation.goBack()}>
          <BackArrowSvg fill={'#000000'} width={iconSize} height={iconSize} />
        </Pressable>

        <Text style={styles.titleText}>Мої дані</Text>
      </View>

      <View style={styles.cardInfoContainer}>
        <Text style={styles.cardName}>
          {lastName} {firstName} {middleName}
        </Text>

        <ItemDataPresent
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
          data={lastName}
          name={'Прізвище:'}
          saveNewData={() => {}}
        />

        <ItemDataPresent
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
          data={firstName}
          name={'Ім`я:'}
          saveNewData={() => {}}
        />

        <ItemDataPresent
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
          data={middleName}
          name={'По батькові:'}
          saveNewData={() => {}}
        />

        <ItemChoseData
          icon={<PenSvg width={penSize} height={penSize} stroke={'#000'} />}
          data={birthDate}
          name={'Дата народження:'}
          saveNewData={props => changeBirthday(props)}
        />

        <ItemDataPresent
          items={[
            {label: 'Чоловік', value: 'Чоловік'},
            {label: 'Жінка', value: 'Жінка'},
            {label: 'Інше', value: 'Інше'},
          ]}
          icon={<PenSvg width={penSize} height={penSize} stroke={'#000'} />}
          data={sex}
          name={'Стать:'}
          saveNewData={props => changeSex(props)}
        />

        <ItemDataPresent
          items={[
            {label: 'Україна', value: 'Україна'},
            {label: 'Інше', value: 'Інше'},
          ]}
          icon={<PenSvg width={penSize} height={penSize} stroke={'#000'} />}
          name={'Громадянство:'}
          data={nationality}
          saveNewData={props => changeCountry(props)}
        />
      </View>

      <View style={styles.cardInfoContainer}>
        <ItemDataPresent
          items={[
            {label: 'Football', value: 'football'},
            {label: 'Baseball', value: 'baseball'},
            {label: 'Hockey', value: 'hockey'},
          ]}
          name={'Пошта:'}
          data={email}
          saveNewData={() => {}}
        />

        <ItemDataPresent
          items={[
            {label: 'Рятівник', value: 'Рятівник'},
            {label: 'Правоохоронець', value: 'Правоохоронець'},
            {label: 'Медик', value: 'Медик'},
            {label: 'Цивільний', value: 'Цивільний'},
            {label: 'Військовий', value: 'Військовий'},
          ]}
          icon={<PenSvg width={penSize} height={penSize} stroke={'#000'} />}
          name={'Статус:'}
          data={status}
          saveNewData={props => changeStatus(props)}
        />
      </View>
    </SafeAreaView>
  );
};
