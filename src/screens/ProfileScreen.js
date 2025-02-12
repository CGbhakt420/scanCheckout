import React from "react";
import { View, Text } from "react-native";
import { theme } from "../theme/colors";

const ProfileScreen = () => (
  <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 24, color: theme.primary }}>Profile</Text>
  </View>
);

export default ProfileScreen;