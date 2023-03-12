import React from 'react'
import { RouteProp } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import SplashScreen from '@/Screen/Splash'
import routeNames from '@/Navigators/RouteName'

export type SplashStackParamList = {
  SplashScreen: undefined
}
export type SplashStackNavigationProp =
  NativeStackNavigationProp<SplashStackParamList>

export type SplashStackRouteProps<
  RouteName extends keyof SplashStackParamList,
> = RouteProp<SplashStackParamList, RouteName>

const Stack = createNativeStackNavigator<SplashStackParamList>()

const SplashStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={routeNames.SplashStack.SplashScreen}
        component={SplashScreen}
      />
    </Stack.Navigator>
  )
}

export default SplashStack
