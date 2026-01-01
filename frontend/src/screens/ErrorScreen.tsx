import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ScreenProps } from "../types";

const ErrorScreen = ({ navigation }: ScreenProps<"ErrorScreen">) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.errorText}>404 ERROR!</Text>
        <Text style={styles.messageText}>
          please check you connection{"\n"}and try again!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  messageText: {
    fontSize: 18,
    fontWeight: "normal",
    color: "#000",
    textAlign: "center",
    lineHeight: 24,
  },
});
