import React from "react";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Linking from "expo-linking";

import * as Base from "../shareds/Base";

import Home from "./Home";
import Search from "./Search";
import Overview from "./Overview";

const prefix = Linking.makeUrl("/");
const linking: LinkingOptions = {
  prefixes: [prefix],
  config: {
    screens: {
      Home: "home",
      Search: "search",
      Overview: "overview",
    },
  },
};

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer linking={linking} fallback={<Base.Text>Loading...</Base.Text>}>
    <Stack.Navigator initialRouteName="Overview" headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Overview" component={Overview} />
    </Stack.Navigator>
  </NavigationContainer>
);
