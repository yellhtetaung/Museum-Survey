import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Camera, CameraType } from "expo-camera";
import Button from "../components/Button";
import Icon from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const Capture = ({ navigation, route }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState();
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch {
        (error) => {
          console.log(error);
        };
      }
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        ratio="4:3"
        type={CameraType.front}
      />
      <View
        style={{
          width: "40%",
          height: height / 4,
          flexDirection: "row",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button title="back" onPress={() => navigation.goBack()} />
        <Button
          title={<Icon name="camera" size={50} />}
          style={{ borderRadius: 60, padding: 30 }}
          onPress={takePicture}
        />
        <Button
          title="Next"
          onPress={() => {
            if (image) {
              navigation.navigate("Preview", {
                image,
                person: route.params.person,
              });
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: 400,
    height: 400,
  },
});

export default Capture;
