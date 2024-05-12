import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {StyleSheet, View} from 'react-native';
import {GlobalColors} from './constants/Global';
import {store} from './state/store';
import {AuthorizationNavigation, Navigation} from './navigation';
import {setProfileData} from './state/profile/profileSlice';
import database from '@react-native-firebase/database';

export default function App(): React.JSX.Element {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  }

  const renderNavigation = () => {
    if (!user) {
      return <AuthorizationNavigation />;
    }

    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  };

  useEffect(() => {
    const onValueChange = database()
      .ref(`/users/${user?.uid}`)
      .on('value', snapshot => {
        store.dispatch(setProfileData(snapshot.val()));
      });

    return () =>
      database().ref(`/users/${user?.uid}`).off('value', onValueChange);
  }, [user]);

  return (
    <View style={styles.container}>
      <NavigationContainer>{renderNavigation()}</NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColors.primary50,
  },
});
