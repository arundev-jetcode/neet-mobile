import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, StatusBarStyle } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Colors from "./src/styles/Colors";
import BottomBar from "./src/navigation/BottomBar";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import Login from "./src/pages/Login";
import Otp from "./src/pages/Otp";
import { LogBox } from "react-native";
import StackNavigation from "./src/navigation/ScreenNaigation";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";

export const ThemeContext = React.createContext<any>([]);
//Ignore all log notifications
LogBox.ignoreAllLogs();
export default function App() {
  let navigationRef = useNavigationContainerRef();

  const [appState, setAppState] = useState<any>({
    bgColor: "#00474C",
    indicatorColor: "light",
  });
  navigationRef.addListener("state", (e) => {
    // You can get the raw navigation state (partial state object of the root navigator)

    // Or get the full state object with `getRootState()`

    let route = navigationRef.getCurrentRoute();

    if (route) {
      switch (route.name) {
        case "Home":
          setAppState({ bgColor: "#00474C", indicatorColor: "light" });
          break;
        default:
          setAppState({
            bgColor: "transparent",
            indicatorColor: "light",
          });
          break;
      }
    }
  });
  // console.log(SplashScreen.Logs,"log")

  console.log(appState);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* <ThemeContext.Provider value={[appState, setAppState]}> */}
      <NativeBaseProvider>
        <StatusBar
          backgroundColor={appState.bgColor}
          style={appState.indicatorColor}
          translucent={appState.translucent}
        />
        {/* <BottomBar setAppState={setAppState} /> */}
        <StackNavigation />

        {/* <Otp /> */}
        {/* <Login/> */}
        {/* <UploadImage/> */}
      </NativeBaseProvider>
      {/* </ThemeContext.Provider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
