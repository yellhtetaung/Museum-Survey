import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { Input } from "@rneui/themed";
import Button from "../components/Button";

const { width, height } = Dimensions.get("window");

const PersonInfo = ({ navigation }) => {
  const [person, setPerson] = useState();
  const [keyboard, setKeyboard] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [orgnization, setOrgnization] = useState("");
  const [nrc, setNrc] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Error Message
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorOrg, setErrorOrg] = useState(false);
  const [errorNrc, setErrorNrc] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  useEffect(() => {
    if (person) {
      navigation.navigate("Feedback", { person });
    }
  }, [person]);

  const submitHandler = () => {
    if (name.trim().length < 3) {
      setErrorName(true);
    } else if (phone.trim().length < 11) {
      setErrorPhone(true);
    } else if (orgnization.trim().length < 3) {
      setErrorOrg(true);
    } else if (nrc.trim().length < 3) {
      setErrorNrc(true);
    } else if (address.trim().length < 3) {
      setErrorCity(true);
    } else if (city.trim().length < 3) {
      setErrorCity(true);
    } else if (country.trim().length < 3) {
      setCountry(true);
    } else {
      setErrorName(false);
      setErrorPhone(false);
      setErrorOrg(false);
      setErrorNrc(false);
      setErrorAddress(false);
      setErrorCity(false);
      setErrorCountry(false);
      setPerson({
        name,
        phone,
        orgnization,
        nrc,
        address,
        city,
        country,
        id: Math.random().toString(),
      });
    }
  };

  const focusMode = useCallback(() => {
    setKeyboard(true);
  }, [keyboard]);

  const blurMode = useCallback(() => {
    setKeyboard(false);
  }, [keyboard]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboard ? -height / 3 : -height}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Input
            value={name}
            onChangeText={setName}
            label="Name"
            labelStyle={{ color: "#000", fontSize: 17 }}
            placeholder="Enter your Name"
            containerStyle={{ width: "50%" }}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={errorName ? "Required Name" : undefined}
          />

          <Input
            value={phone}
            onChangeText={setPhone}
            inputMode="numeric"
            label="Phone Number"
            labelStyle={{ color: "#000", fontSize: 17 }}
            placeholder="Enter your Phone Number"
            containerStyle={{ width: "50%" }}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={errorPhone ? "Required Phone Number" : undefined}
          />

          <Input
            value={orgnization}
            onChangeText={setOrgnization}
            label="Orgnization / company"
            labelStyle={{ color: "#000", fontSize: 17 }}
            placeholder="Enter your Orgnization or Company"
            containerStyle={{ width: "50%" }}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={
              errorOrg ? "Required Orgnization or Company" : undefined
            }
          />

          <Input
            value={nrc}
            onChangeText={setNrc}
            label="NRC"
            labelStyle={{ color: "#000", fontSize: 17 }}
            placeholder="Enter your NRC"
            containerStyle={{ width: "50%" }}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={errorNrc ? "Required NRC" : undefined}
          />

          <Input
            value={address}
            onChangeText={setAddress}
            label="Address"
            labelStyle={{ color: "#000", fontSize: 17 }}
            placeholder="Enter your address"
            containerStyle={{ width: "50%" }}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={errorAddress ? "Required Address" : undefined}
            onFocus={focusMode}
            onBlur={blurMode}
          />

          <Input
            value={city}
            onChangeText={setCity}
            label="City"
            labelStyle={{ color: "#000", fontSize: 17 }}
            placeholder="Enter your city"
            containerStyle={{ width: "50%" }}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={errorCity ? "Required city" : undefined}
            onFocus={focusMode}
            onBlur={blurMode}
          />

          <Input
            value={country}
            onChangeText={setCountry}
            label="Country"
            labelStyle={{ color: "#000", fontSize: 17 }}
            placeholder="Enter your country"
            containerStyle={{ width: "50%" }}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={errorCountry ? "Required Country" : undefined}
            onFocus={focusMode}
            onBlur={blurMode}
          />
        </View>

        <View
          style={{
            height: height / 3,
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
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height / 2,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    padding: 20,
  },

  inputContainerStyle: {
    backgroundColor: "#cbd5e1",
    borderBottomWidth: 2,
    elevation: 10,

    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

export default PersonInfo;
