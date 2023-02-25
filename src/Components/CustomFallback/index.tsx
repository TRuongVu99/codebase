import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '../Button'
import { Layout } from '@/Theme'
import { CustomFallbackProps } from './type'

const CustomFallback = (props: CustomFallbackProps) => (
  <View style={[Layout.fill, Layout.center]}>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={props.resetError} title={'Try again'} />
  </View>
)

export default CustomFallback

const styles = StyleSheet.create({})
