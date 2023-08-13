import React, { memo } from "react"
import { StyleSheet, Text, View } from "react-native"

import { Image } from "../image"

export const LogoImageText = memo(() => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image source={require("../../assets/logo.jpg")} style={styles.image} />
      <View style={styles.view}>
        <Text style={styles.text}>Trung tâm</Text>
        <Text style={styles.text}>Nhân Văn</Text>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 2,
  },
  view: {
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 11,
  },
})
