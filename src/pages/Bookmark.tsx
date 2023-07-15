import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
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
import { ThemeContext } from "../../App";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Bookmark = () => {
  const BackgroundImg = require("../assets/BgImg.png");
  // const [appState, setAppState] = React.useContext(ThemeContext);
  // console.log(appState, "apppStata");
  // useEffect(() => {
  //   setAppState({ bgColor: "red", indicatorColor: "light" });
  // }, []);
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
                marginTop: hp("9%"),
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontSize: hp("3%"),
                  fontWeight: "bold",
                }}
              >
                Notes
              </Text>

              <View
                style={{
                  display: "flex",
                  backgroundColor: "#505352",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: wp("1%"),
                }}
              >
                <InputBox
                  inputType={"text"}
                  placeholderName={"search"}
                  size={wp("2%")}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: "#A0A0A0",
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginTop: hp("4%"),
                backgroundColor: "rgba(0, 71, 76, 0.67)",
                width: wp("90%"),
                padding: moderateScale(20),
                borderRadius: moderateScale(20),
              }}
            >
              <Text
                style={{
                  fontSize: hp("2.1%"),
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
