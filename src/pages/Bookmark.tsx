import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors, { LinearBgColor } from "../styles/Colors";
import StatusBar from "../components/StatusBar";
import { Input } from "native-base";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";
import InputBox from "../components/Input";
import RadioButton from "../components/RadioButton";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const Bookmark = () => {
  const BackgroundImg = require("../assets/BgImg.png");
  const options = [
    { label: "Decreases", value: "a" },
    { label: "Increases", value: "b" },
    { label: "Remains the same", value: "c" },
    { label: "Is equal to the atmospheric pressure", value: "d" },
  ];
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
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                marginTop: verticalScale(70),
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontSize: moderateScale(30),
                  fontWeight: "bold",
                }}
              >
                Notes
              </Text>

              <InputBox
                inputType={"text"}
                placeholderName={"search"}
                size={moderateScale(350)}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{
                  position: "absolute",
                  left: horizontalScale(270),
                  bottom: verticalScale(16),
                  color: "#A0A0A0",
                }}
              />
            </View>
            <View
              style={{
                marginTop: verticalScale(40),
                backgroundColor: "rgba(0, 71, 76, 0.67)",
                width: horizontalScale(330),
                padding: moderateScale(20),
                borderRadius: moderateScale(20),
              }}
            >
              <Text
                style={{
                  fontSize: moderateScale(20),
                  alignItems: "center",
                  justifyContent: "center",
                  color: Colors.white,
                }}
              >
                1.If a soap bubble expands, the pressure inside the bubble
              </Text>
              <RadioButton labelName={""} options={options} />
              <View></View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: "100%",
    height: "100%",
    // opacity: 0.8,
    resizeMode: "stretch",
  },
});
