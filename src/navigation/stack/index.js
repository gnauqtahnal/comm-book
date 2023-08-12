import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "../screen/home"

const Stack = createNativeStackNavigator()

export const StackMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}
