import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanning, setScanning] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Ionicons name="cart-outline" size={28} color={theme.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Ionicons name="person-circle-outline" size={28} color={theme.primary} />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>QuickCheckout</Text>

      {/* Scan Button */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => navigation.navigate("Scanner")}
        disabled={hasPermission === null || hasPermission === false}
      >
        <Text style={styles.scanButtonText}>
          {hasPermission === false ? "Camera Permission Needed" : "Tap here to Scan Items"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    position: "absolute",
    top: 50,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.primary,
    marginBottom: 30,
  },
  scanButton: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 10,
  },
  scanButtonText: {
    color: theme.buttonText,
    fontSize: 18,
  },
});
