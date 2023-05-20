import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBgColor } from "../styles/Colors";
import { ImageBackground, Image } from "react-native";
import StatusBar from "../components/StatusBar";
const Rewards = () => {
  const BackgroundImg = require("../assets/BgImg.png");
  const RewardsImg = require("../assets/Rewards.png");

  return (
    <>
      {/* <StatusBar bgColor={"transparent"} indicatorsColor={"light"}/> */}

      <LinearGradient
        colors={[
          LinearBgColor.hospitalblue1,
          LinearBgColor.hospitalblue2,
          LinearBgColor.hospitalblue3,
          LinearBgColor.hospitalblue4,
        ]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        // locations={[1,0.75,1,1]}
      >
        <ImageBackground source={BackgroundImg} style={styles.Img}>
          <View>
            <Image source={RewardsImg} style={{ width: 100, height: 100 }} />
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    resizeMode: "stretch",
  },
});

export default Rewards;
