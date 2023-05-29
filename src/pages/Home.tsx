import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext } from "react";
import HeaderBar from "../navigation/Headerbar";
// import insets from "../styles/Responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const Home = (props: any) => {
  // console.log(props);
  const insets = useSafeAreaInsets();
  // const user = useContext();
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
