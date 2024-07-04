import { View, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Home!</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Sheet")}>
				<Text>Press me</Text>
			</TouchableOpacity>
		</View>
	);
}
