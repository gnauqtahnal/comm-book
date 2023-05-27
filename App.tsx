import "react-native-gesture-handler";
import { Navigation, SafeAreaProvider } from "./src/core";

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
