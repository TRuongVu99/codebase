import { MutableRefObject } from 'react'
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native'

export interface IOtpInput extends TextInputProps {
  otpCount: number
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  textStyle?: StyleProp<TextStyle>
  focusColor?: string
  autoFocus?: boolean
}

export interface IOtpContext
  extends Pick<IOtpInput, 'inputStyle' | 'textStyle' | 'focusColor'> {
  inputRef: MutableRefObject<any[]>
  otpValue: String[]
  onPress: Function
  onFocusNext: (value: string, index: number) => Function
  onFocusPrevious: (key: string, index: number) => Function
  currentIndex: number
  rest: TextInputProps
}
