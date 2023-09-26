import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../styles/themes";
import StatusBar from "../components/StatusBar";
import Colors from "../styles/themes";
import { moderateScale } from "../styles/Responsive";
import FontScale from "../styles/fontResponsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Notification = () => {
  const BackgroundImg = require("../assets/BgImg.png");

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
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                backgroundColor: "rgba(47, 47, 47, 0.45)",
                padding: moderateScale(20),
                borderRadius: 8,
                width: "90%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 12,
                }}
              >
                <Text style={{ fontSize: hp(2), color: COLORS.light }}>
                  Medico
                </Text>
                <Text style={{ color: COLORS.light  }}>now</Text>
              </View>
              <View>
                <Text style={{ fontSize: hp(2.3), color: COLORS.light  }}>
                  Exam updates
                </Text>
                <Text style={{ fontSize: hp(2.4), color: COLORS.light  }}>
                  Modal exam date comming soon
                </Text>
              </View>
            </View>
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
});
export default Notification;
