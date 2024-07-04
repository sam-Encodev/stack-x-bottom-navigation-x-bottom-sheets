import { useRef, useMemo, useCallback } from "react";
import { StyleSheet, View, Button } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

export default function BottomSheetComponent({ navigation }) {
	// ref
	const bottomSheetRef = useRef(null);

	// variables
	const snapPoints = useMemo(() => ["20", "50%"], []);

	// callbacks
	const handleSheetChanges = useCallback(
		(index) => {
			if (index === -1) {
				return navigation.goBack();
			}
		},
		[navigation],
	);

	const handleClosePress = useCallback(() => {
		navigation.goBack();
		bottomSheetRef.current?.close();
	}, [navigation]);

	// renders
	const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				enableTouchThrough={false}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
			/>
		),
		[],
	);

	return (
		<View style={styles.container}>
			<BottomSheet
				ref={bottomSheetRef}
				index={0}
				snapPoints={snapPoints}
				onChange={handleSheetChanges}
				backdropComponent={renderBackdrop}
				pressBehavior="collapse"
				onPress={() => handleClosePress()}
				enablePanDownToClose={true}
			>
				<View>
					<Button onPress={handleClosePress} title="Close Modal" />
				</View>
			</BottomSheet>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
	},
});
