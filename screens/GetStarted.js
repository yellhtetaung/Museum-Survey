import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Button from "../components/Button";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Museum Survey</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("PersonInfo")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },

  title: {
    fontSize: 90,
    fontWeight: "bold",
    letterSpacing: 10,
    textTransform: "uppercase",

    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
  },
});

export default GetStarted;
