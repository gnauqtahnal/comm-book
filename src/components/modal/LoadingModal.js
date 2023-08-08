import React, { createContext, useContext } from 'react'
import { Modal, Text } from 'react-native'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { useStoreState } from '../../store'

export const useLoadingModal = () => useContext(LoadingModalContext)

const ProgressBar = () => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarWrapper} />
    </View>
  )
}

export const LoadingModal = () => {
  const state = useStoreState()

  return (
    <Modal
      visible={state?.loading || false}
      animationType="fade"
      transparent={true}
    >
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#FFFFFF" />
          </View>

          <Text style={styles.text}>Đang tải...</Text>

          <ProgressBar />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  wrapper: {
    borderRadius: 8,
    backgroundColor: 'black',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 4,
    width: 100,
    backgroundColor: '#696969',
    borderRadius: 512,
  },
  progressBarWrapper: {
    height: '100%',
    width: 0,
    backgroundColor: 'white',
    borderRadius: 512,
  },
})
