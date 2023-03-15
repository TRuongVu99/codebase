import { Layout } from '@/Theme'
import { Colors } from '@/Theme/Variables'
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Animated, {
  FadeInDown,
  FadeOut,
  Layout as LayoutAnimated,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import { kWidth } from '../../Common/Constants'
import { sizeScale } from '../../Common/Scale'
import { IOtpInput } from './Type'

const OtpContext = createContext<any>({})

const OtpItem = ({ i }: { i: number }) => {
  const {
    inputRef,
    onPress,
    otpValue,
    onFocusNext,
    onFocusPrevious,
    focus,
    focusColor,
    containerStyle,
    inputStyle,
    textStyle,
    rest,
  } = useContext(OtpContext)
  const border = useSharedValue(focus === i ? 1.5 : 0)
  const borderStyle = useAnimatedStyle(() => {
    return {
      borderWidth: border.value,
    }
  })
  useEffect(() => {
    border.value = withDelay(100, withTiming(focus === i ? 1.5 : 0))
  }, [focus])
  return (
    <View key={i} style={[containerStyle]}>
      <TextInput
        style={[{ height: sizeScale(60), width: sizeScale(45) }, inputStyle]}
        caretHidden
        keyboardType="number-pad"
        ref={inputRef.current[i]}
        value={otpValue[i]}
        onChangeText={v => onFocusNext(v, i)}
        onKeyPress={e => onFocusPrevious(e.nativeEvent.key, i)}
        maxLength={1}
        {...rest}
      />
      <Pressable
        onPress={onPress}
        style={{
          position: 'absolute',
        }}
      >
        <Animated.View
          layout={LayoutAnimated}
          style={[
            {
              height: sizeScale(60),
              width: sizeScale(45),
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Colors.white,
              borderRadius: 8,
              borderColor: focusColor,
            },
            borderStyle,
            inputStyle,
          ]}
        >
          {otpValue[i] !== '' && (
            <Animated.Text
              entering={FadeInDown}
              exiting={FadeOut}
              style={[
                {
                  fontWeight: '600',
                  fontSize: 26,
                  color: '#2b4156',
                },
                textStyle,
              ]}
            >
              {otpValue[i]}
            </Animated.Text>
          )}
        </Animated.View>
      </Pressable>
    </View>
  )
}

export const OtpInput = ({
  otpCount = 5,
  containerStyle = {},
  inputStyle = {},
  textStyle = {},
  focusColor = '#4497ce',
  autoFocus = true,
  ...rest
}: IOtpInput) => {
  const inputRef = useRef<any[]>([])
  const data: String[] = new Array(otpCount).fill('')
  inputRef.current = data.map(
    (_, index) => (inputRef.current[index] = React.createRef()),
  )
  const [focus, setFocus] = useState<number>(0)
  const [otpValue, setValue] = useState<Array<any>>(data)

  const onPress = () => {
    inputRef.current[focus].current.focus()
  }

  useEffect(() => {
    if (autoFocus) {
      inputRef.current[focus].current.focus()
    }
  }, [])

  const onFocusNext = (value: string, index: number) => {
    if (index < data.length - 1 && value) {
      console.log('rrun focus next')
      inputRef.current[index + 1].current.focus()
      setFocus(index + 1)
    }
    if (index === data.length - 1) {
      inputRef.current[index].current.blur()
    }
    otpValue[index] = value
    setValue([...otpValue])
  }

  const onFocusPrevious = (key: string, index: number) => {
    if (key === 'Backspace' && index !== 0) {
      inputRef.current[index - 1].current.focus()
      setFocus(index - 1)
      otpValue[index - 1] = ''
      setValue([...otpValue])
    } else if (key === 'Backspace' && index === 0) {
      otpValue[0] = ''
    }
  }
  if (otpCount > 6) {
    throw 'OTP Count maxium is 6'
  }
  const inputProps = {
    inputRef,
    otpValue,
    onPress,
    onFocusNext,
    onFocusPrevious,
    focus,
    containerStyle,
    inputStyle,
    textStyle,
    focusColor,
    rest,
  }
  return (
    <OtpContext.Provider value={inputProps}>
      <View style={[Layout.rowCenter, styles.container]}>
        {data.map((_, i) => {
          return <OtpItem i={i} />
        })}
      </View>
    </OtpContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    width: kWidth,
    gap: sizeScale(10),
  },
})

export default OtpInput
