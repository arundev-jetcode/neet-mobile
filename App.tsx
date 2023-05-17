
import { StyleSheet, Text, View,StatusBarStyle } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import Colors from './src/styles/Colors';
import BottomBar from './src/navigation/BottomBar';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
export default function App() {
const version = Platform.Version
console.log(version,"version")
  return (
    <NativeBaseProvider>
         <StatusBar
         backgroundColor={Colors.darkGreen}
         style='light'
      />
   <BottomBar/>
   {/* <LinearGradient
        colors={['purple', 'white']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      ></LinearGradient> */}
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
