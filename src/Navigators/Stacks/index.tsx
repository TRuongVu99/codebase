import React from 'react'
import { RouteProp } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import BottomTab from '@/Navigators/BottomTab'
import routeNames from '@/Navigators/RouteName'

export type MainStackParamList = {
  BottomTab: undefined
}
export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>

export type MainStackRouteProps<RouteName extends keyof MainStackParamList> =
  RouteProp<MainStackParamList, RouteName>

const Stack = createNativeStackNavigator<MainStackParamList>()

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={routeNames.BottomTab.BottomTab}
        component={BottomTab}
      />
    </Stack.Navigator>
  )
}

export default MainStack
