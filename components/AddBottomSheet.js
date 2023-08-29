import BottomSheet from "@gorhom/bottom-sheet";
import React, { Fragment } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Portal, PortalHost } from "@gorhom/portal";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const AddBottomSheet = () => {
  // Creates a reference to the DOM element that we can interact with
  const bottomSheetRef = React.useRef(null);

  // Setting the points to which we want the bottom sheet to be set to
  // Using '-30' here so that it is not seen when it is not presented
  const snapPoints = React.useMemo(() => [30, "75%"], []);

  // Callback function that gets called when the bottom sheet changes
  const handleSheetChanges = React.useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // Expands the bottom sheet when our button is pressed
  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  };

  return (
    <Fragment>
      {/* <TouchableWithoutFeedback onPress={onAddButtonPress}>
        <MaterialCommunityIcons name="check" size={24} color="black" />
      </TouchableWithoutFeedback> */}
      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1} // Hide the bottom sheet when we first load our component
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.bottomSheetTitle}>Add Customer</Text>
          </View>
        </BottomSheet>
      </Portal>
    </Fragment>
  );
};

export default AddBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 50,
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
});
