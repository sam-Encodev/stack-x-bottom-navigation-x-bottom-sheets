import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Navigation from "./navigation";
import { PortalProvider } from "@gorhom/portal";

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PortalProvider>
          <Navigation />
        </PortalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
