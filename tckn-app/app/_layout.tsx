import { PaperProvider } from "react-native-paper";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function RootLayout() {
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen name="index" options={{ title: 'Bilgi' }} />
          <Drawer.Screen name="tckn/index" options={{ title: 'TCKN Doğrulama' }} />
        </Drawer>
      </GestureHandlerRootView>
    </PaperProvider>)
}
