import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from './theme'

export default function ButtonReserve({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        // mode === 'outlined' && { backgroundColor: theme.colors.surface },
        mode === 'contained' && { backgroundColor: '#ff9e00' },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    marginVertical: 5,
    paddingVertical: 2,
    borderRadius: 15,
  },
  text: {
    fontSize: 12,
    lineHeight: 23,
  },
})
