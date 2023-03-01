import React, { useCallback, useEffect, useState, createRef } from "react";
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

  // Text
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

  // Effect
  const [nameColor, setNameColor] = useState("#000");
  const [phoneColor, setPhoneColor] = useState("#000");
  const [orgColor, setOrgColor] = useState("#000");
  const [nrcColor, setNrcColor] = useState("#000");
  const [addressColor, setAddressColor] = useState("#000");
  const [cityColor, setCityColor] = useState("#000");
  const [countryColor, setCountryColor] = useState("#000");

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboard ? -height / 3 : -height}
        style={{ flex: 1 }}
      >
        <StatusBar />
        <View style={styles.container}>
          <Input
            value={name}
            onChangeText={setName}
            label="Name"
            labelStyle={{ color: "#000", fontSize: 17, marginBottom: 5 }}
            placeholder="Enter your Name"
            containerStyle={{ width: "45%" }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { borderBottomColor: nameColor },
            ]}
            errorMessage={errorName ? "Required Name" : undefined}
            autoCapitalize="words"
            onFocus={() => setNameColor("#4f46e5")}
            onBlur={() => setNameColor("#000")}
          />

          <Input
            value={phone}
            onChangeText={setPhone}
            inputMode="numeric"
            label="Phone Number"
            labelStyle={{ color: "#000", fontSize: 17, marginBottom: 5 }}
            placeholder="Enter your Phone Number"
            containerStyle={{ width: "45%" }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { borderBottomColor: phoneColor },
            ]}
            errorMessage={errorPhone ? "Required Phone Number" : undefined}
            onFocus={() => setPhoneColor("#4f46e5")}
            onBlur={() => setPhoneColor("#000")}
          />

          <Input
            value={orgnization}
            onChangeText={setOrgnization}
            label="Orgnization / Company"
            labelStyle={{ color: "#000", fontSize: 17, marginBottom: 5 }}
            placeholder="Enter your Orgnization or Company"
            containerStyle={{ width: "45%" }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { borderBottomColor: orgColor },
            ]}
            errorMessage={
              errorOrg ? "Required Orgnization or Company" : undefined
            }
            autoCapitalize="words"
            onFocus={() => setOrgColor("#4f46e5")}
            onBlur={() => setOrgColor("#000")}
          />

          <Input
            value={nrc}
            onChangeText={setNrc}
            label="NRC"
            labelStyle={{ color: "#000", fontSize: 17, marginBottom: 5 }}
            placeholder="Enter your NRC"
            containerStyle={{ width: "45%" }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { borderBottomColor: nrcColor },
            ]}
            errorMessage={errorNrc ? "Required NRC" : undefined}
            onFocus={() => setNrcColor("#4f46e5")}
            onBlur={() => setNrcColor("#000")}
          />

          <Input
            value={address}
            onChangeText={setAddress}
            label="Address"
            labelStyle={{ color: "#000", fontSize: 17, marginBottom: 5 }}
            placeholder="Enter your address"
            containerStyle={{ width: "45%" }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { borderBottomColor: addressColor },
            ]}
            errorMessage={errorAddress ? "Required Address" : undefined}
            onFocus={() => {
              setKeyboard(true);
              setAddressColor("#4f46e5");
            }}
            onBlur={() => {
              setKeyboard(false);
              setAddressColor("#000");
            }}
          />

          <Input
            value={city}
            onChangeText={setCity}
            label="City"
            labelStyle={{ color: "#000", fontSize: 17, marginBottom: 5 }}
            placeholder="Enter your city"
            containerStyle={{ width: "45%" }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { borderBottomColor: cityColor },
            ]}
            errorMessage={errorCity ? "Required city" : undefined}
            onFocus={() => {
              setKeyboard(true);
              setCityColor("#4f46e5");
            }}
            onBlur={() => {
              setKeyboard(false);
              setCityColor("#000");
            }}
          />

          <Input
            value={country}
            onChangeText={setCountry}
            label="Country"
            labelStyle={{ color: "#000", fontSize: 17, marginBottom: 5 }}
            placeholder="Enter your country"
            containerStyle={{ width: "45%" }}
            inputContainerStyle={[
              styles.inputContainerStyle,
              { borderBottomColor: countryColor },
            ]}
            errorMessage={errorCountry ? "Required Country" : undefined}
            onFocus={() => {
              setKeyboard(true);
              setCountryColor("#4f46e5");
            }}
            onBlur={() => {
              setKeyboard(false);
              setCountryColor("#000");
            }}
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
            title="back"
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
    justifyContent: "space-evenly",

    padding: 20,
  },

  inputContainerStyle: {
    backgroundColor: "#cbd5e1",
    borderBottomWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    elevation: 10,

    padding: 10,
  },
});

export default PersonInfo;
