import { StyleSheet, Text, View, StatusBarStyle } from "react-native";
import { NativeBaseProvider, Box } from "native-base";
import Colors from "./src/styles/Colors";
import BottomBar from "./src/navigation/BottomBar";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import Login from "./src/pages/Login";

export default function App() {
  const [appState, setAppState] = useState<any>({
    bgColor: "#00474C",
    indicatorColor: "light",
  });

  // console.log(SplashScreen.Logs,"log")

  console.log(appState);

  return (
    <NativeBaseProvider>
      <StatusBar
        backgroundColor={appState.bgColor}
        style={appState.indicatorColor}
      />
      <BottomBar setAppState={setAppState} />
      {/* <Login/> */}
      {/* <UploadImage/> */}
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
