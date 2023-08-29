import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigation";

export default function Navigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}