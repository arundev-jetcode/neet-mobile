import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors, { LinearBgColor } from "../styles/Colors";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";
import InputBox from "../components/Input";
import RadioButton from "../components/RadioButton";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import BookmarkNextScreen from "../screens/BookmarkScreen";

const Bookmark = () => {
  const navigation: any = useNavigation();
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
                  fontSize: moderateScale(24),
                  fontWeight: "bold",
                }}
              >
                Notes
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  backgroundColor: "#505352",
                  borderRadius: 6,
                }}
              >
                <InputBox
                  inputType={"text"}
                  placeholderName={"search"}
                  size={moderateScale(30)}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: "#A0A0A0",
                    right: moderateScale(12),
                  }}
                />
              </View>
            </View>
            <Pressable
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
                  fontSize: moderateScale(17),
                  alignItems: "center",
                  justifyContent: "center",
                  color: Colors.white,
                }}
              >
                1.If a soap bubble expands, the pressure inside the bubble
              </Text>
              <RadioButton labelName={""} options={options} />
              <View></View>
            </Pressable>
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
