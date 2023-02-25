import React, { memo, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const AppMode = ({ envMode }: { envMode: 'Dev' | 'Staging' | 'Prod' }) => {
  const [appMode, setAppMode] = useState<boolean>(true)
  return (
    <TouchableOpacity
      style={[styles.wrapMode]}
      onPress={() => {
        setAppMode(prev => !prev)
      }}
    >
      {appMode && (
        <Text adjustsFontSizeToFit={true} style={[styles.textMode]}>
          {envMode !== 'Prod' ? envMode : ''}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textMode: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 11,
    textAlign: 'center',
  },
  wrapMode: {
    position: 'absolute',
    right: -20,
    top: 0,
    zIndex: 999,
    width: 150,
    backgroundColor: '#F0A939',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    transform: [{ rotate: '45deg' }, { translateX: 30 }],
  },
})

export default AppMode
