import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackOptions} from './options';
import {AuthorizationParamList, RootStackParamList, Routes} from './types';
import {NavigationBottomTabs} from './components/navigationBottomTabs';
import {AuthorizationScreen} from '../screens/authorizationScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = (): React.JSX.Element => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name={Routes.TabNavigator}
        component={NavigationBottomTabs}
      />
    </Stack.Navigator>
  );
};

const Auth = createNativeStackNavigator<AuthorizationParamList>();

export const AuthorizationNavigation = (): React.JSX.Element => {
  return (
    <Auth.Navigator screenOptions={stackOptions}>
      <Auth.Screen
        name={Routes.RegisterScreen}
        component={AuthorizationScreen}
      />
    </Auth.Navigator>
  );
};
