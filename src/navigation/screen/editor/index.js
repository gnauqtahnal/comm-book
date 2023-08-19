import { Entypo, FontAwesome } from "@expo/vector-icons"
import React, { memo } from "react"
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Card } from "../../../components"

const PImgFCam = memo(() => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Entypo name="camera" size={32} color="black" />
      </View>
    </TouchableOpacity>
  )
})

const PImgLib = memo(() => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Entypo name="image" size={32} color="black" />
      </View>
    </TouchableOpacity>
  )
})

const RecordButton = memo(() => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <FontAwesome name="microphone" size={32} color="black" />
      </View>
    </TouchableOpacity>
  )
})

const StopButton = memo(() => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <FontAwesome name="stop" size={32} color="black" />
      </View>
    </TouchableOpacity>
  )
})

const ContainerView = ({ children }) => {
  if (Platform.OS === "ios") {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      >
        {children}
      </View>
    )
  } else {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
      >
        {children}
      </SafeAreaView>
    )
  }
}

export const EditorScreen = () => {
  const RecStopBtn = () => {
    return (
      <View>
        <RecordButton />
        <StopButton />
      </View>
    )
  }

  return (
    <ContainerView>
      <Card.Comm source={null} text={null} />

      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <View style={{ marginRight: 4 }}>
          <PImgFCam />
        </View>
        <View style={{ marginLeft: 4 }}>
          <PImgLib />
        </View>
      </View>

      <RecStopBtn />
    </ContainerView>
  )
}

const styles = StyleSheet.create({
  button: {
    borderColor: "#808080",
    width: 60,
    aspectRatio: 1,
    borderRadius: 99,
    borderWidth: 1,
    padding: 11,
    alignItems: "center",
    justifyContent: "center",
  },
})
