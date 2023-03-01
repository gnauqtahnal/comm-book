import { NavigationContainer } from '@react-navigation/native';
import RootStack from './stack';

export default function NavigationProvider() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
