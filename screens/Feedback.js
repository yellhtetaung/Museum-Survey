import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import Button from "../components/Button";

const { height } = Dimensions.get("screen");

const Feedback = ({ navigation, route }) => {
  const [person, setPerson] = useState();
  const [survey, setSurvey] = useState("");

  useEffect(() => {
    setPerson(route.params.person);
  }, [person]);

  const submitHandler = () => {
    if (survey.trim().length > 10) {
      navigation.navigate("Capture", {
        person,
        survey,
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TextInput
          value={survey}
          onChangeText={setSurvey}
          style={styles.input}
          placeholder="Enter Feedback"
          multiline
          textAlignVertical="top"
          numberOfLines={20}
          cursorColor="#000"
        />

        <View
          style={{
            height: height / 4,
            flexDirection: "row",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            title="Pervious"
            style={{ marginHorizontal: 40 }}
            onPress={() => navigation.goBack()}
          />
          <Button
            title="Next"
            style={{ marginHorizontal: 40 }}
            onPress={submitHandler}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",

    marginTop: 20,
  },

  input: {
    width: "85%",
    borderWidth: 3,
    borderColor: "#4f46e5",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    fontSize: 18,
    elevation: 10,

    padding: 20,
  },
});

export default Feedback;
