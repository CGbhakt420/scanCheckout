import React from "react";
import { View, Text } from "react-native";
import { theme } from "../theme/colors";

const CartScreen = () => (
  <View style={{ flex: 1, backgroundColor: theme.background, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ fontSize: 24, color: theme.primary }}>Your Cart</Text>
  </View>
);

export default CartScreen;