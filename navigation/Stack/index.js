import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NotFound from "./screens/NotFound";
import BottomTabNavigator from "../BottomTab";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFound}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
