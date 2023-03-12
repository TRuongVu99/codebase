import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import React, { useEffect } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// Code Push
import CodePush from 'react-native-code-push'
// Keyboard
import KeyboardManager from 'react-native-keyboard-manager'
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './BottomTab'
import { navigationRef } from '@/Navigators/Utils'
// RTK
import { useAppDispatch, useAppSelector } from '@/Common/Hooks/useRTK'
import { RXStore } from '@/Store/Utils'
// Theme
import { useAppInit, useTheme } from '@/Common/Hooks'
// Components
import { appLoaderHolder } from '@/Common/AppLoaderHolder'
import { isIos } from '@/Common/Device'
import { messageDialogHolder } from '@/Common/MessageHolder'
import AppMode from '@/Components/AppMode'
import { AppLoader } from '@/Components/Loader'
import { MessageDialog } from '@/Components/MessageDialog'
import ToastMessage from '@/Components/ToastMessage'

const ApplicationNavigator = () => {
  const dispatch = useAppDispatch()
  const { darkMode, NavigationTheme } = useTheme()
  const { env } = useAppSelector(state => state.app)
  const { appLoadingComplete } = useAppInit()

  useEffect(() => {
    if (appLoadingComplete) {
      CodePush.sync({
        deploymentKey: isIos
          ? env.CODE_PUSH_KEY_IOS
          : env.CODE_PUSH_KEY_ANDROID,
        installMode: CodePush.InstallMode.IMMEDIATE,
      })
    }
  }, [appLoadingComplete])

  useEffect(() => {
    if (isIos) {
      if (darkMode) {
        KeyboardManager.setKeyboardAppearance('dark')
      } else {
        KeyboardManager.setKeyboardAppearance('light')
      }
    }
  }, [darkMode])

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <BottomSheetModalProvider>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <BottomTab />
          <ToastMessage />
          <AppLoader ref={appLoaderHolder} />
          <MessageDialog ref={messageDialogHolder} />
          <RXStore />
          {appLoadingComplete && env.APP_ENV !== 'Prod' && (
            <AppMode envMode={env.APP_ENV} />
          )}
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  rootView: {
    alignSelf: 'stretch',
    flex: 1,
  },
})

export default ApplicationNavigator
