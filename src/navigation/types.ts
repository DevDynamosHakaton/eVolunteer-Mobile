export enum Routes {
  CabinetScreen = 'CabinetScreen',
  MapScreen = 'MapScreen',
  NotificationScreen = 'NotificationScreen',
  TabNavigator = 'TabNavigator',
  RegisterScreen = 'RegisterScreen',

  ProfileMenuScreen = 'ProfileMenuScreen',
  ProfileDataScreen = 'ProfileDataScreen',
  ProfileActivityScreen = 'ProfileActivityScreen',
  ProfileHelpScreen = 'ProfileHelpScreen',
}

export type RootTabParamList = {
  [Routes.CabinetScreen]: undefined;
  [Routes.MapScreen]: undefined;
  [Routes.NotificationScreen]: undefined;
};

export type RootStackParamList = {
  [Routes.TabNavigator]: undefined;
  [Routes.RegisterScreen]: {chatId: string};
};

export type AuthorizationParamList = {
  [Routes.RegisterScreen]: undefined;
};

export type ProfileStackParamList = {
  [Routes.ProfileMenuScreen]: undefined;
  [Routes.ProfileDataScreen]: undefined;
  [Routes.ProfileActivityScreen]: undefined;
  [Routes.ProfileHelpScreen]: undefined;
};
