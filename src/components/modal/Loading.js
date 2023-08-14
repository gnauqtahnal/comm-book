import React from "react"
import { Modal, Text } from "react-native"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { useSelector } from "react-redux"

import { reduxAction } from "../../redux"

const ProgressBar = ({ progress = 0 }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBarWrapper, { width: `${progress}%` }]} />
    </View>
  )
}

export const ModalLoading = () => {
  const visible = reduxAction.modal.loading.get.visible(useSelector)
  const progressBar = reduxAction.modal.loading.get.progressBar(useSelector)

  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>
          <Text style={styles.text}>Đang tải...</Text>

          {progressBar.enable ? (
            <ProgressBar progress={progressBar.value} />
          ) : null}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,.6)",
  },
  wrapper: {
    borderRadius: 5,
    backgroundColor: "black",
    padding: 16,
    paddingTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: {
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 4,
    width: 100,
    backgroundColor: "#696969",
    borderRadius: 512,
  },
  progressBarWrapper: {
    height: "100%",
    width: 0,
    backgroundColor: "white",
    borderRadius: 512,
  },
})
