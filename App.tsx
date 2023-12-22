import 'react-native-gesture-handler';
import '@/Translations/i18n';
import 'react-native-get-random-values';
import React from 'react';
import { UIManager } from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { AvoidSoftInput } from 'react-native-avoid-softinput';
import { store, persistor } from '@/Store';
import ApplicationNavigator from '@/Navigators/Navigation';
import { isIos } from '@/Common/Device';
import CustomFallback from '@/Components/CustomFallback';
import KeyboardManager from 'react-native-keyboard-manager';

if (!isIos) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
} else {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setEnableAutoToolbar(false);
  KeyboardManager.setOverrideKeyboardAppearance(true);
  KeyboardManager.setKeyboardAppearance('default');
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setShouldPlayInputClicks(true);
  KeyboardManager.resignFirstResponder();
}

const App = () => (
  <Provider store={store}>
    {/**
     * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
     * and saved to redux.
     * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
     * for example `loading={<SplashScreen />}`.
     * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
     */}
    <PersistGate loading={null} persistor={persistor}>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <ApplicationNavigator />
      </ErrorBoundary>
    </PersistGate>
  </Provider>
);

export default App;
