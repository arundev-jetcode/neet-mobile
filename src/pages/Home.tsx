import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import HeaderBar from "../navigation/Headerbar";
// import insets from "../styles/Responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../../App";

const Home = (props: any) => {
  // const [appState, setAppState] = React.useContext(ThemeContext);
  // console.log(appState, "apppStata");
  // useEffect(() => {
  //   setAppState({ bgColor: "#00474C", indicatorColor: "light" });
  // }, []);
  console.log(props);
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={{ backgroundColor: "red" }}></View>
      <View
        style={{
          paddingTop: insets.top,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
        }}
      >
        <HeaderBar />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // container:{
  //     paddingBottom:insets.bottom,
  //     paddingTop:insets.top,
  //     paddingRight:insets.right,
  //     paddingLeft:insets.left,
  // }
});

export default Home;
