import React, { Fragment } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
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
  // ref
  const bottomSheetRef = React.useRef(null);

  // variables
  const snapPoints = React.useMemo(() => [30, "75%"], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const onAddButtonPress = () => {
    bottomSheetRef?.current?.expand();
  };

  const handleClosePress = () => {
    bottomSheetRef.current?.close();
  };

  // renders
  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter {...props} bottomInset={24}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Footer</Text>
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        enableTouchThrough={false}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

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
          backdropComponent={renderBackdrop}
          footerComponent={renderFooter}
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
