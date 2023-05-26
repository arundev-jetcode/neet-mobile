import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBgColor } from "../styles/Colors";
import OtpInputs from "react-native-otp-inputs";
import Buttons from "../components/Button";
const Otp = () => {
  const BackgroundImg = require("../assets/BgImg.png");

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
              justifyContent: "center",
              //   backgroundColor: "red",
            }}
          >
            <OtpInputs
              handleChange={(code) => console.log(code)}
              autofillFromClipboard
              numberOfInputs={4}
              inputStyles={{
                backgroundColor: "white",
                fontSize: 30,
                paddingHorizontal: 10,
                borderRadius: 5,
                paddingVertical: 4,
                borderColor: "white",
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "60%",
              }}
            />
            <Buttons
              width={"60%"}
              height={"5%"}
              textSize={0}
              text="Verify Otp"
              backgroundColor={"#003C31"}
            />
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
    // opacity: 0.8,
    resizeMode: "stretch",
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
export default Otp;
