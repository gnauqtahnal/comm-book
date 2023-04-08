import React from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

const LoadingModalContext = React.createContext();

export function LoadingModalProvider({ children }) {
  const [loading, setLoading] = React.useState(false);

  const value = React.useMemo(() => ({ loading, setLoading }), [loading]);

  return (
    <LoadingModalContext.Provider value={value}>
      {children}
    </LoadingModalContext.Provider>
  );
}

export function useLoadingModal() {
  return React.useContext(LoadingModalContext);
}

export default function LoadingModal() {
  // console.log(`LoadingModal is rendering...`);
  const { loading } = useLoadingModal();

  return (
    <Modal visible={loading} transparent>
      <View tw="flex-1 justify-center items-center">
        <ActivityIndicator size="large" style={{ transform: [{ scale: 2 }] }} />
      </View>
    </Modal>
  );
}

export const LoadingModalMemo = React.memo(LoadingModal);
