import React from 'react'
import { ActivityIndicator, Modal, Text, View } from 'react-native'

import { useLoadingModal } from './useLoadingModal'

export const LoadingModal = () => {
  const { visible } = useLoadingModal()

  return (
    <Modal visible={visible} transparent>
      <View
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
      >
        <View
          className="rounded-lg p-2 pt-4"
          style={{
            backgroundColor: '#000000',
            transform: [{ scale: 1.5 }],
          }}
        >
          <ActivityIndicator size="large" color="#ffffff" />
          <Text className="mt-2 text-white">Đang tải...</Text>
        </View>
      </View>
    </Modal>
  )
}
