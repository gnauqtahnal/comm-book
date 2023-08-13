import React, { memo } from "react"
import { StyleSheet, Text, View } from "react-native"

import { Constant } from "../../constant"
import { Image } from "../image"

export const CardComm = memo(({ source = "", text = "" }) => {
  return (
    <View style={StyleSheet.compose([styles.round, styles.container])}>
      <View style={styles.imageContainer}>
        <Image
          style={StyleSheet.compose([styles.round, styles.image])}
          source={source}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1}>
          {text}
        </Text>
      </View>
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
  imageContainer: {
    aspectRatio: 1,
    padding: Constant.card.comm.padding,
    width: "100%",
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: Constant.card.comm.padding,
    paddingTop: 0,
    width: "100%",
  },
  text: {
    fontSize: Constant.card.comm.fontSize,
    textAlign: "center",
  },
})
