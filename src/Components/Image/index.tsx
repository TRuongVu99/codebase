import React from 'react'
import { Image } from 'expo-image'
import { View } from 'react-native'
import Images from '@/Theme/Images'
import { styles } from './Style'
import { CustomImageProps } from './Type'

export const CustomImage = ({
  style: styleOverride = {},
  source,
  resizeMode = 'cover',
  containerStyle,
  cachePolicy = 'disk',
  placeholder = Images.defaultImage,
  placeholderContentFit = 'scale-down',
  ...rest
}: CustomImageProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        {...rest}
        contentFit={resizeMode}
        style={[styles.img, styleOverride]}
        source={{ uri: source }}
        cachePolicy={cachePolicy}
        placeholder={placeholder}
        placeholderContentFit={placeholderContentFit}
        transition={200}
      />
    </View>
  )
}

export const LocalImage = ({
  style: styleOverride = {},
  source: localSource = Images.defaultImage,
  resizeMode = 'cover',
  containerStyle,
  cachePolicy = 'disk',
  ...rest
}: CustomImageProps) => {
  return (
    <Image
      {...rest}
      contentFit={resizeMode}
      style={[styles.imgLocal, styleOverride]}
      source={localSource}
      cachePolicy={cachePolicy}
    />
  )
}
