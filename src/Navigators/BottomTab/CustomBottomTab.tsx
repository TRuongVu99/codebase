import React from 'react'
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { BlurView } from '@react-native-community/blur'

import { useAppSelector } from '@/Common/Hooks/useRTK'
import { isIos } from '@/Common/Device'

const CustomTabBar = (props: BottomTabBarProps) => {
  const { darkMode } = useAppSelector(state => state.theme)
  return isIos ? (
    <BlurView
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      blurType={darkMode ? 'extraDark' : 'xlight'}
      blurAmount={10}
      // blurRadius={25}
      // overlayColor="transparent"
    >
      <BottomTabBar {...props} />
    </BlurView>
  ) : (
    <BottomTabBar {...props} />
  )
}

export default CustomTabBar
