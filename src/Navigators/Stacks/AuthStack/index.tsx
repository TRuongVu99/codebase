import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import OnBoardScreen from '@/Screens/OnBoard';
import LoginScreen from '@/Screens/Login';
import SignUpScreen from '@/Screens/SignUp';
import ForgotPasswordScreen from '@/Screens/ForgotPassword';
import OtpScreen from '@/Screens/Otp';
import routeNames from '@/Navigators/RouteName';

export type AuthStackParamList = {
  [routeNames.AuthStack.OnBoardScreen]: undefined;
  [routeNames.AuthStack.LoginScreen]: undefined;
  [routeNames.AuthStack.SignUpScreen]: undefined;
  [routeNames.AuthStack.ForgotPasswordScreen]: undefined;
  [routeNames.AuthStack.OtpScreen]: undefined;
};
export type AuthStackNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

export type AuthStackRouteProps<RouteName extends keyof AuthStackParamList> =
  RouteProp<AuthStackParamList, RouteName>;

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={routeNames.AuthStack.OnBoardScreen}
        component={OnBoardScreen}
      />
      <Stack.Screen
        name={routeNames.AuthStack.LoginScreen}
        component={LoginScreen}
      />
      <Stack.Screen
        name={routeNames.AuthStack.SignUpScreen}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={routeNames.AuthStack.ForgotPasswordScreen}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={routeNames.AuthStack.OtpScreen}
        component={OtpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
