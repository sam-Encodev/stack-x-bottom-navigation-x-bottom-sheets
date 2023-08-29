import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "./screens/NotFoundScreen";
import BottomTabNavigator from "../BottomTabNavigation";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
