import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileStackParamList, Routes} from '../../types';
import {ProfileMenuScreen} from '../../../screens/profileMenuScreen';
import {ProfileDataScreen} from '../../../screens/profileDataScreen';
import {ProfileActivityScreen} from '../../../screens/profileActivityScreen';
import {ProfileHelpScreen} from '../../../screens/profileHelpScreen';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const CabinetNavigation = (): React.JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name={Routes.ProfileMenuScreen}
      component={ProfileMenuScreen}
    />
    <Stack.Screen
      name={Routes.ProfileDataScreen}
      component={ProfileDataScreen}
    />
    <Stack.Screen
      name={Routes.ProfileActivityScreen}
      component={ProfileActivityScreen}
    />
    <Stack.Screen
      name={Routes.ProfileHelpScreen}
      component={ProfileHelpScreen}
    />
  </Stack.Navigator>
);
