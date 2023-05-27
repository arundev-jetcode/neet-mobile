import { StyleSheet, Text, View, StatusBarStyle } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Colors from "./src/styles/Colors";
import BottomBar from "./src/navigation/BottomBar";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import Login from "./src/pages/Login";
import Otp from "./src/pages/Otp";
import { LogBox } from "react-native";
import ScreenNavigation from "./src/navigation/ScreenNaigation";
import { Provider } from "react-redux";
import Store from "./src/redux/store/Store";
//Ignore all log notifications
LogBox.ignoreAllLogs();
export default function App() {
  const [appState, setAppState] = useState<any>({
    bgColor: "#00474C",
    indicatorColor: "light",
    translucent: false,
  });

  // console.log(SplashScreen.Logs,"log")

  console.log(appState);

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={appState.bgColor}
        style={appState.indicatorColor}
      />
      {/* <Provider store={Store}> */}
      <BottomBar setAppState={setAppState} />
      {/* <ScreenNavigation /> */}
      {/* <Otp /> */}
      {/* <Login/> */}
      {/* <UploadImage/> */}
      {/* </Provider> */}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
