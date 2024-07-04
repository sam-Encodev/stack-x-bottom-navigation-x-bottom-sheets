import { createStackNavigator } from "@react-navigation/stack";

import NotFound from "./screens/NotFound";
import BottomTabNavigator from "../BottomTab";
import BottomSheetComponent from "../../components/BottomSheet";

const Stack = createStackNavigator();

export default function StackNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Home" component={BottomTabNavigator} />
			<Stack.Screen
				name="Sheet"
				component={BottomSheetComponent}
				options={{
					headerShown: false,
					gestureEnabled: true,
					cardOverlayEnabled: true,
					presentation: "transparentModal",
					animationTypeForReplace: "push",
					animation: "fade",
				}}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFound}
				options={{ title: "Oops!" }}
			/>
		</Stack.Navigator>
	);
}
