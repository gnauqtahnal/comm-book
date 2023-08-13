import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { memo } from "react"
import { StyleSheet, View } from "react-native"

import { Constant } from "../../constant"

export const CardAdd = memo(() => {
  return (
    <View style={StyleSheet.compose([styles.round, styles.container])}>
      <MaterialCommunityIcons name="plus" size={40} color="black" />
    </View>
  )
})

const styles = StyleSheet.create({
  round: {
    borderRadius: Constant.card.comm.borderRadius,
  },
  container: {
    alignItems: "center",
    backgroundColor: Constant.card.comm.backgroundColor,
    borderWidth: 1,
    height: Constant.card.comm.height,
    justifyContent: "flex-start",
    margin: Constant.card.comm.margin,
    width: Constant.card.comm.width,
    borderColor: Constant.card.comm.borderColor,
  },
})
