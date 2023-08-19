import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { EditorScreen } from "../screen/editor"
import { HomeScreen } from "../screen/home"

const Stack = createNativeStackNavigator()

export const StackMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>

      <Stack.Group
        screenOptions={{ headerShown: false, presentation: "modal" }}
      >
        <Stack.Screen name="Editor" component={EditorScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}
