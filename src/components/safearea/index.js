import { SafeAreaView } from "react-native-safe-area-context"

export const SafeView = ({ children, style, ...rest }) => {
  return (
    <SafeAreaView style={[style, { flex: 1 }]} {...rest}>
      {children}
    </SafeAreaView>
  )
}
