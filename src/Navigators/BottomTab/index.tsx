import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ExampleContainer from '@/Screen/Example'
import CustomTabBar from './CustomBottomTab'

const Tab = createBottomTabNavigator()

// @refresh reset
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={ExampleContainer} />
    </Tab.Navigator>
  )
}

export default BottomNavigator
