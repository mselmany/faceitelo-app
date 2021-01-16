import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Casper from "./Casper";
import Home from "./Home";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      mode="modal"
      screenOptions={{
        cardOverlayEnabled: true,
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Casper} />
    </Stack.Navigator>
  </NavigationContainer>
);
