import { StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {
  //โหลดหน้า
  useEffect(() => {
    const timer = setTimeout(() => {router.replace("/input");}, 3000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <View style={styles.container}>
      <View></View>
      <Image
        source={require("@/assets/images/carLogo.png")}
        style={styles.imglogo}
      />
      <Text style={styles.appnameen}>Smart Auto Loan</Text>
      <Text style={styles.appnameth}>วางแผนออกรถฉบับมือโปร</Text>
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ marginTop: 50 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#040442",
  },
  imglogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  appnameen: {
    fontSize: 35,
    fontFamily: "Prompt_700Bold",
    marginBottom: 5,
    color: "white",
  },
  appnameth: {
    fontSize: 18,
    fontFamily: "Prompt_400Regular",
    color: "white",
  },
});
