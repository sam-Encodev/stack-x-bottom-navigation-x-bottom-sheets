import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import AddScreen from "./screens/Add";
import AboutScreen from "./screens/About";
import SettingsScreen from "./screens/Settings";

import BottomSheetComponent from "../../components/BottomSheet";

const BottomTab = createBottomTabNavigator();

function TabBarIcon({ name }) {
  return <MaterialCommunityIcons name={name} size={24} color="black" />;
}

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          ...style.shadow,
          paddingBottom: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          tabBarButton: () => <BottomSheetComponent />,
        }}
      />
      <BottomTab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="information-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
