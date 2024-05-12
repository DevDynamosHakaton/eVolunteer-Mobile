import {useState} from 'react';
import {Alert, LayoutAnimation, Platform, UIManager} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import createProfile from '../../../utils/authorization/createProfile';

interface UseTranslatedResult {
  login: string;
  setLogin: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  isRegister: boolean;
  changeAuthType: (state: boolean) => void;
  onGoogleButtonPress: () => void;
  emailAndPasswordSignIn: () => void;
  createAccount: () => void;
}

export default function useDataHook(): UseTranslatedResult {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isRegister, setIsRegister] = useState<boolean>(false);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const springAnimationConfig = {
    duration: 700,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.spring, springDamping: 0.8},
  };

  function changeAuthType(props: boolean) {
    LayoutAnimation.configureNext(springAnimationConfig);
    setIsRegister(props);
  }

  async function onGoogleButtonPress() {
    GoogleSignin.configure({
      webClientId:
        '693826860872-gs37ba9mt6csmlbtb0n61g8b3r47f22j.apps.googleusercontent.com',
    });

    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );

      const {uid, email, displayName, phoneNumber, photoURL} =
        userCredential.user;

      createProfile({
        firstName: displayName,
        lastName: '',
        middleName: '',
        userId: uid,
        email,
        mobileNumber: phoneNumber,
        avatarUrl: photoURL,
        nationality: '',
        city: '',
        birthDate: '',
        qualification: '',
        role: 'Волонтер',
        sex: 'Інше',
        status: 'Неактивний',
      });
    } catch (error: any) {
      if (error?.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  }

  function emailAndPasswordSignIn() {
    auth()
      .signInWithEmailAndPassword(login, password)
      .then(() => {
        console.log('Logged');
      })
      .catch(error => {
        Alert.alert('Error', error.code, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      });
  }

  function createAccount() {
    auth()
      .createUserWithEmailAndPassword(login, password)
      .then(userCredential => {
        const user = userCredential.user;

        createProfile({
          firstName: 'User',
          lastName: '',
          middleName: '',
          userId: user.uid,
          email: login,
          mobileNumber: '',
          avatarUrl: '',
          nationality: '',
          city: '',
          birthDate: '',
          qualification: '',
          role: 'Волонтер',
          sex: 'Інше',
          status: 'Неактивний',
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Try again', 'That email address is already in use!', [
            {
              text: 'OK',
            },
          ]);
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Try again', 'That email address is invalid!', [
            {
              text: 'OK',
            },
          ]);
        }
      });
  }

  return {
    password,
    setPassword,
    setLogin,
    login,
    isRegister,
    changeAuthType,
    onGoogleButtonPress,
    emailAndPasswordSignIn,
    createAccount,
  };
}
