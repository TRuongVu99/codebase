import { Platform, PixelRatio, StatusBar, Dimensions } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'

import { kHeight, kWidth } from 'Common/Constants'
import ReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback'
import EncryptedStorage from 'react-native-encrypted-storage'
import { v4 as uuidv4 } from 'uuid'

const pixelDensity = PixelRatio.get()

export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const isTablet = () => {
  const adjustedWidth = kWidth * pixelDensity
  const adjustedHeight = kHeight * pixelDensity
  if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
    return true
  } else {
    return (
      pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)
    )
  }
}

const X_WIDTH = 375
const X_HEIGHT = 812

const XSMAX_WIDTH = 414
const XSMAX_HEIGHT = 896

const IP12_ZOOM_WIDTH = 320
const IP12_ZOOM_HEIGHT = 693

const IP12_WIDTH = 390
const IP12_HEIGHT = 844

const IP12MAX_WIDTH = 428
const IP12MAX_HEIGHT = 926

const IP14PRO_WIDTH = 393
const IP14PRO_HEIGHT = 852

const IP14MAX_WIDTH = 430
const IP14MAX_HEIGHT = 932

export const fetchDeviceUID = async (): Promise<string> => {
  let uuid = uuidv4()
  let fetchUUID = await EncryptedStorage.getItem('secure_deviceid')
  //if user has already signed up prior
  if (fetchUUID) {
    uuid = JSON.parse(fetchUUID)
  } else {
    await EncryptedStorage.setItem('secure_deviceid', JSON.stringify(uuid))
  }
  console.log('DeviceUID', uuid)
  return uuid
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
}

export const haptics = (type?: HapticFeedbackTypes): void => {
  ReactNativeHapticFeedback.trigger(type || 'impactLight', options)
}

export const hasNotch = (): boolean => {
  if (Platform.OS !== 'ios' || Platform.isPad || Platform.isTV) {
    return false
  }
  if (
    (kWidth === X_WIDTH && kHeight === X_HEIGHT) ||
    (kWidth === XSMAX_WIDTH && kHeight === XSMAX_HEIGHT) ||
    (kWidth === IP12_ZOOM_WIDTH && kHeight === IP12_ZOOM_HEIGHT) ||
    (kWidth === IP12_WIDTH && kHeight === IP12_HEIGHT) ||
    (kWidth === IP12MAX_WIDTH && kHeight === IP12MAX_HEIGHT) ||
    (kWidth === IP12MAX_WIDTH && kHeight === IP12MAX_HEIGHT) ||
    (kWidth === IP14PRO_WIDTH && kHeight === IP14PRO_HEIGHT) ||
    (kWidth === IP14MAX_WIDTH && kHeight === IP14MAX_HEIGHT)
  ) {
    return true
  }
  return false
}
export function ifHasNotch(iphoneXStyle: any, regularStyle: any) {
  if (hasNotch()) {
    return iphoneXStyle
  }
  return regularStyle
}

export function getStatusBarHeight(safe: any) {
  return Platform.select({
    ios: ifHasNotch(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  })
}

export function getBottomSpace() {
  return hasNotch() ? 34 : 0
}

export const getNavbarHeight = (): number => {
  return Dimensions.get('screen').height - kHeight
}
