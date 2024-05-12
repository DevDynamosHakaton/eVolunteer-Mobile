import React from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import GoogleButton from '../../components/authorization/googleButton';
import TextInputLogin from '../../components/authorization/textInputLogin';
import ButtonStandard from '../../components/buttonStandard';
import {FontSize, GlobalColors} from '../../constants/Global';
import useDataHook from './hooks';

export function AuthorizationScreen() {
  const {
    password,
    setPassword,
    setLogin,
    login,
    isRegister,
    changeAuthType,
    onGoogleButtonPress,
    emailAndPasswordSignIn,
    createAccount,
  } = useDataHook();
  return (
    <>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/image/authorization/heart.jpg')}
      />
      <KeyboardAvoidingView
        style={styles.screenContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        onTouchStart={() => Keyboard.dismiss()}>
        <Text style={styles.welcomeText}>Вітаємо!</Text>

        <View
          style={isRegister ? styles.registerContainer : styles.loginContainer}>
          {isRegister ? (
            <>
              <Text style={styles.infoText}>Реєстрація</Text>

              <View>
                <TextInputLogin
                  value={login}
                  placeholder={'Пошта..'}
                  onChangeText={setLogin}
                />

                <TextInputLogin
                  value={password}
                  placeholder={'Ваш пароль..'}
                  onChangeText={setPassword}
                />
              </View>

              <ButtonStandard
                width={'70%'}
                color={'#FFF'}
                text={'Вже є аккаунт?'}
                fontSize={FontSize.size20}
                backgroundColor={''}
                onPress={() => changeAuthType(false)}
              />

              <View>
                <ButtonStandard
                  width={'70%'}
                  backgroundColor={GlobalColors.primary50}
                  color={'#000'}
                  text={'Увійти'}
                  fontSize={FontSize.size22}
                  onPress={createAccount}
                />

                <GoogleButton onPress={onGoogleButtonPress} />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.infoText}>Авторизація</Text>

              <TextInputLogin
                value={login}
                placeholder={'Пошта..'}
                onChangeText={setLogin}
              />

              <TextInputLogin
                value={password}
                placeholder={'Пароль..'}
                onChangeText={setPassword}
              />

              <ButtonStandard
                width={'70%'}
                color={'#FFF'}
                text={'Немає аккаунту?'}
                onPress={() => changeAuthType(true)}
                fontSize={FontSize.size20}
                backgroundColor={''}
              />

              <View>
                <ButtonStandard
                  onPress={emailAndPasswordSignIn}
                  width={'70%'}
                  backgroundColor={GlobalColors.primary50}
                  color={'#000'}
                  text={'Увійти'}
                  fontSize={FontSize.size22}
                />

                <GoogleButton onPress={onGoogleButtonPress} />
              </View>
            </>
          )}
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
