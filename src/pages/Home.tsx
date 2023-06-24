import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import React, { useEffect } from "react";
import HeaderBar from "../navigation/Headerbar";
// import insets from "../styles/Responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "../../App";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LevelupSvg from "../components/LevelupSvg";

const screenWidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

console.log("height, and width", screenWidth, screenheight);

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
      <ScrollView>
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
          <LevelupSvg />
        </View>
      </ScrollView>
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
