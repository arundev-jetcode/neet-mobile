import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
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
import { COLORS } from "../styles/themes";
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
          COLORS.primary01,
          COLORS.primary02,
          COLORS.primary03,
          COLORS.primary05
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
                marginTop: hp(9),
              }}
            >
              <Text style={styles.note}  >Notes </Text>

              <View  style={styles.searchContainer} >
                <InputBox
                  inputType={"text"}
                  placeholderName={"search"}
                  size={wp(5)}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: COLORS.grey01,
                  }}
                />
              </View>
            </View>
            <View
              style={styles.qusContainer}
            >
              <Text
                style={styles.qus}
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
  note:{
    color: COLORS.light,
   fontSize: hp("3%"),
   fontWeight: "bold",
  },
  searchContainer:{
    display: "flex",
    backgroundColor: COLORS.grey,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: wp(4),
    width:wp(90)
  },
  qusContainer:{
    marginTop: hp(4),
    backgroundColor: COLORS.secondary05,
    width: wp(90),
    paddingHorizontal: wp(5),
    paddingVertical: hp(5),
    borderRadius: hp(4),
  },
  qus:{
    fontSize: hp(2.8),
    alignItems: "center",
    justifyContent: "center",
    color: COLORS.light,
  }
});
