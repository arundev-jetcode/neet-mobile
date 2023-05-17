
import { StyleSheet, Text, View,StatusBarStyle } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import Colors from './src/styles/Colors';
import BottomBar from './src/navigation/BottomBar';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native'; 
// import deviceInfo from "react-native-device-info"
export default function App() {
// const data = deviceInfo.getSystemVersion();
// console.log(data,"dataaa")
const version = Platform.Version
console.log(version,"version")
  return (
    <NativeBaseProvider>
         <StatusBar
         backgroundColor={Colors.darkGreen}
         
      />
   <BottomBar/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkGreen ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
