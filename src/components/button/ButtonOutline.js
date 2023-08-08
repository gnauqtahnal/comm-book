import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

export const ButtonOutline = ({ children, ...rest }) => {
  return <TouchableOpacity>{children}</TouchableOpacity>
}

const styles = StyleSheet.create({
  pressable: {},
  container: {},
})
