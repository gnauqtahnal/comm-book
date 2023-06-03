import React from 'react'
import { ActivityIndicator, Modal, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

export default function LoadingModal() {
  const { isLoading } = useSelector((state) => state.loading)

  return (
    <Modal animationType="fade" transparent={true} visible={isLoading}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <View
          style={{ backgroundColor: 'black', padding: 16, borderRadius: 8 }}
        >
          <ActivityIndicator size="large" color="white" />

          <View style={{ marginTop: 8 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                lineHeight: 28,
                textAlign: 'center',
              }}
            >
              Đang tải...
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}
