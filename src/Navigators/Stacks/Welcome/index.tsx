import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import WelcomeScreen from '@/Screen/Welcome';
import routeNames from '@/Navigators/RouteName';

export type SplashStackParamList = {
  WelcomeScreen: undefined;
};
export type SplashStackNavigationProp =
  NativeStackNavigationProp<SplashStackParamList>;

export type SplashStackRouteProps<
  RouteName extends keyof SplashStackParamList,
> = RouteProp<SplashStackParamList, RouteName>;

const Stack = createNativeStackNavigator<SplashStackParamList>();

const WelcomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={routeNames.WelcomeStack.WelcomeScreen}
        component={WelcomeScreen}
      />
    </Stack.Navigator>
  );
};

export default WelcomeStack;
