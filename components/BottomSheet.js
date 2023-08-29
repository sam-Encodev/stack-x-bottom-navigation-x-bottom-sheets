import BottomSheet from "@gorhom/bottom-sheet";
import React, { Fragment, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Portal } from "@gorhom/portal";

export default function BottomSheetComponent() {
  const bottomSheetRef = React.useRef(null);
  const snapPoints = React.useMemo(() => [30, "75%"], []);

  const handleSheetChanges = React.useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  };

  const handleClosePress = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <Fragment>
      <TouchableWithoutFeedback onPress={onAddButtonPress}>
        <MaterialCommunityIcons name="check" size={24} color="black" />
      </TouchableWithoutFeedback>
      <Portal>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.bottomSheetTitle}>Add Customer</Text>

            <Button
              onPress={handleClosePress}
              title="Close Modal"
              color="black"
            />
          </View>
        </BottomSheet>
      </Portal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontWeight: "500",
  },
});
