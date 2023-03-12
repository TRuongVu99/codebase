import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { ImageProps, ImageStyle, ImageContentFit } from 'expo-image'

import { CustomOmit } from '@/Common/Type'
import { ImageLocalType } from '@/Theme/Images'

export interface CustomImageProps
  extends CustomOmit<ImageProps, 'source' | 'style' | 'resizeMode'> {
  style?: ImageStyle
  containerStyle?: StyleProp<ViewStyle>
  source: string
  resizeMode?: ImageContentFit
  localSource?: ImageLocalType
}
