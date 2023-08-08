import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

export const ButtonBase = ({ children, ...rest }) => {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>
}

const styles = StyleSheet.create({
  pressable: {},
  container: {},
})
