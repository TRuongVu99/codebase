import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useEffect } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// Code Push
import CodePush from 'react-native-code-push';
// Keyboard
import KeyboardManager from 'react-native-keyboard-manager';
// Navigation
import { navigationRef } from '@/Navigators/Utils';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';
import AuthStack from '@/Navigators/Stacks/AuthStack';
// RTK
import { useAppSelector } from '@/Common/Hooks/useRTK';
import { RXStore } from '@/Store/Utils';
// Theme
import { useAppInit, useTheme } from '@/Common/Hooks';
// Components
import { appLoaderHolder } from '@/Common/AppLoaderHolder';
import { isIos } from '@/Common/Device';
import { messageDialogHolder } from '@/Common/MessageHolder';
import AppMode from '@/Components/AppMode';
import { AppLoader } from '@/Components/Loader';
import { MessageDialog } from '@/Components/MessageDialog';
import Splash from '@/Components/Splash';
import ToastMessage from '@/Components/ToastMessage';
import RNBootSplash from 'react-native-bootsplash';

const ApplicationNavigator = () => {
  const { darkMode, NavigationTheme } = useTheme();
  const { env } = useAppSelector(state => state.app);
  const { appLoadingComplete } = useAppInit();

  useEffect(() => {
    // delay to ensure animation is loaded (see https://github.com/react-native-community/lottie-react-native/issues/274)
    setTimeout(() => {
      RNBootSplash.hide({ fade: false }); // hide the bootsplash immediately, without any fade
    }, 500);
  }, []);

  useEffect(() => {
    if (appLoadingComplete) {
      CodePush.sync({
        deploymentKey: isIos
          ? env.CODE_PUSH_KEY_IOS
          : env.CODE_PUSH_KEY_ANDROID,
        installMode: CodePush.InstallMode.IMMEDIATE,
      });
    }
  }, [appLoadingComplete]);

  useEffect(() => {
    if (isIos) {
      if (darkMode) {
        KeyboardManager.setKeyboardAppearance('dark');
      } else {
        KeyboardManager.setKeyboardAppearance('light');
      }
    }
  }, [darkMode]);

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <Splash appLoadingComplete={appLoadingComplete} />
      <BottomSheetModalProvider>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          {/* <BottomTab /> */}
          <AuthStack />
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
  );
};

const styles = StyleSheet.create({
  rootView: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'red',
  },
});

export default ApplicationNavigator;
