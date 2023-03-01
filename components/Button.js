import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4f46e5",
    borderRadius: 10,
    elevation: 10,

    padding: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    letterSpacing: 3,
    textTransform: "uppercase",
  },
});

export default Button;
