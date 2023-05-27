import { StyleSheet, Text, View } from "react-native";

export default function CommonScreen() {
  return (
    <View style={styles.container}>
      <Text>Common screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
