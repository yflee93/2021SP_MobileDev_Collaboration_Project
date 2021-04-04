import React from 'react'
import {
  View,
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native'
import { theme } from './theme'

export default function Background({ children }) {
  return (
    <ImageBackground
      source={require('../../assets/background.jpeg')}
      resizeMode='cover'
      style={styles.background}
    >
      <View style={styles.overlay} />
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
})
