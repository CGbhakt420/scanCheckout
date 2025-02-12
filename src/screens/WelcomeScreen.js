import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { theme } from "../theme/colors";

const WelcomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 24, fontWeight: "bold", color: theme.primary }}>Welcome to QuickCheckout</Text>
    <TouchableOpacity
      style={{ marginTop: 20, padding: 15, backgroundColor: theme.primary, borderRadius: 10 }}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={{ color: "white", fontSize: 18 }}>Get Started</Text>
    </TouchableOpacity>
  </View>
);

export default WelcomeScreen;