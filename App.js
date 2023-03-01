import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetStarted from "./screens/GetStarted";
import PersonInfo from "./screens/PersonInfo";
import Feedback from "./screens/Feedback";
import Capture from "./screens/Capture";
import Preview from "./screens/Preview";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="PersonInfo" component={PersonInfo} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Capture" component={Capture} />
        <Stack.Screen name="Preview" component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
