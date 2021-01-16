import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NavigationContainer } from "@react-navigation/native";

import Search from "./Search";
import Search2 from "./Search2";
import Search3 from "./Search3";

const Stack = createSharedElementStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: "transparent" },
      }}
      mode="modal">
      {/* <Stack.Screen name="Search" component={Search} /> */}
      <Stack.Screen name="Search2" component={Search2} />
      <Stack.Screen
        name="Search3"
        component={Search3}
        sharedElements={(route) => [{ id: "QWE" }, { id: "QWE2", animation: "fade" }]}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
