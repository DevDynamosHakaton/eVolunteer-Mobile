import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {options} from '../options';
import {RootTabParamList, Routes} from '../types';
import {iconSize, styles} from './styles';
import MapSvg from '../../assets/svg/navigation/map.svg';
import NotificationsSVG from '../../assets/svg/navigation/notifications.svg';
import ProfileSvg from '../../assets/svg/navigation/profile.svg';
import {GlobalColors} from '../../constants/Global';
import {MapScreen} from '../../screens/mapScreen';
import {Text, View} from 'react-native';
import {CabinetNavigation} from './cabinetNavigation';
import {NotificationScreen} from '../../screens/notificationScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

const MapScreenIcon = ({focused}: {focused: boolean}) => (
  <>
    <View style={focused ? styles.activeIconContainer : styles.iconContainer}>
      <MapSvg
        width={iconSize}
        height={iconSize}
        fill={focused ? GlobalColors.primary700 : GlobalColors.body100}
      />
    </View>

    <Text style={styles.text}>Карта</Text>
  </>
);

const CabinetScreenIcon = ({focused}: {focused: boolean}) => (
  <>
    <View style={focused ? styles.activeIconContainer : styles.iconContainer}>
      <ProfileSvg
        width={iconSize}
        height={iconSize}
        fill={focused ? GlobalColors.primary700 : GlobalColors.body100}
      />
    </View>

    <Text style={styles.text}>Кабінет</Text>
  </>
);

const NotificationScreenIcon = ({focused}: {focused: boolean}) => (
  <>
    <View style={focused ? styles.activeIconContainer : styles.iconContainer}>
      <NotificationsSVG
        width={iconSize}
        height={iconSize}
        fill={focused ? GlobalColors.primary700 : GlobalColors.body100}
      />
    </View>

    <Text style={styles.text}>Сповіщення</Text>
  </>
);

export const NavigationBottomTabs = (): React.JSX.Element => {
  return (
    <Tab.Navigator
      sceneContainerStyle={styles.tabSceneContainerStyle}
      screenOptions={options}>
      <Tab.Screen
        name={Routes.CabinetScreen}
        component={CabinetNavigation}
        options={{
          tabBarIcon: CabinetScreenIcon,
        }}
      />
      <Tab.Screen
        name={Routes.MapScreen}
        component={MapScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: MapScreenIcon,
        }}
      />
      <Tab.Screen
        name={Routes.NotificationScreen}
        component={NotificationScreen}
        options={{
          tabBarIcon: NotificationScreenIcon,
        }}
      />
    </Tab.Navigator>
  );
};
