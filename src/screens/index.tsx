import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import Search from "./Search";

const Stack = createSharedElementStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: false,
        cardStyle: { backgroundColor: "transparent" },
      }}
      mode="modal">
      <Stack.Screen
        name="Home"
        component={Home}
        sharedElements={(route) => [{ id: "search" }, { id: "title", animation: "fade" }]}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        sharedElements={(route) => [{ id: "search" }, { id: "title", animation: "fade" }]}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
