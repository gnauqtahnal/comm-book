import { NavigationContainer } from "@react-navigation/native"

import { StackMain } from "./stack"

export const NavigationProvider = ({ children }) => {
  return (
    <NavigationContainer>
      <StackMain />
      {children}
    </NavigationContainer>
  )
}
