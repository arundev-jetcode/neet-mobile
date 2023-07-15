import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button, stylingProps } from "native-base";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBgColor } from "../styles/Colors";
import { ImageBackground, Image } from "react-native";
import StatusBar from "../components/StatusBar";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";
import Colors from "../styles/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import FontScale from "../styles/fontResponsive";
const Rewards = () => {
  const BackgroundImg = require("../assets/BgImg.png");
  const RewardsImg = require("../assets/Rewards.png");
  console.log("width, height", screenWidth, screenHeight);

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
          <View style={styles.rewardsContainer}>
            <View style={styles.rewrdsImg}>
              <Image source={RewardsImg} style={{ width: 200, height: 200 }} />
            </View>

            <View style={styles.contentContainer}>
              <View style={styles.curntpointCont}>
                <Text style={styles.currentText}>current points</Text>
                <Text style={styles.currentPoints}>3,110</Text>
              </View>
              <View style={styles.lifeContainer}>
                <View>
                  <Text style={styles.lifeScoreText}>Life time score</Text>
                  <Text style={styles.lifePoints}>8,000</Text>
                </View>
                <View style={styles.verticleLine}></View>

                <View>
                  <Text style={styles.balanceText}>Balance points</Text>
                  <Text style={styles.balancePoints}>4,000</Text>
                </View>
              </View>
              <View style={styles.targetContainer}>
                <Text style={styles.targetText}>target points</Text>
                <Text style={styles.targetPoints}>3,110</Text>
              </View>
              <View style={styles.milestoneContainer}>
                <View style={styles.milstoneText}>
                  <Text style={styles.commonfontSize}>Milestone</Text>
                  <Text style={styles.commonfontSize}>Points</Text>
                </View>
                <View style={styles.verticleLine}></View>

                <View style={styles.subPointsContainer}>
                  <View>
                    <Text style={styles.subjectText}>Chemistry</Text>
                    <Text style={styles.commonColor}> 400P</Text>
                    <Text style={styles.subjectText}>physics</Text>
                    <Text style={styles.commonColor}>500P</Text>
                  </View>
                  <View style={styles.daysContainer}>
                    <Text>5</Text>
                    <Text style={styles.commonColor}>D</Text>
                    <Text style={styles.commonColor}>a</Text>
                    <Text style={styles.commonColor}>y</Text>
                    <Text style={styles.commonColor}>s</Text>
                  </View>
                </View>
              </View>

              <View style={{ top: hp("3%") }}>
                <Button>Claim</Button>
              </View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    // width: "100%",
    width: "100%",
    flex: 1,
    height: "100%",
    // opacity: moderateScale(0.8),
    resizeMode: "stretch",
  },
  rewardsContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    // bottom: hp(6),
  },
  rewrdsImg: {
    position: "relative",
    bottom: hp(25),
  },
  contentContainer: {
    backgroundColor: "rgba(0, 71, 76, 0.67)",
    paddingHorizontal: wp("3%"),
    paddingVertical: verticalScale(40),
    borderRadius: hp(2),
    paddingTop: hp("12%"),
    position: "absolute",
    zIndex: -1,
    top: hp("24%"),
    width: "85%",
    // padding: moderateScale(20),
  },
  curntpointCont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  currentText: {
    fontSize: hp("2%"),
    textTransform: "uppercase",
    color: "white",
    letterSpacing: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    paddingVertical: hp("0.3%"),
    width: "100%",
  },
  currentPoints: {
    fontSize: hp("3%"),
    color: "rgba(244, 220, 0, 1),rgba(219, 134, 6, 1)",
    fontWeight: "bold",
  },
  lifeContainer: {
    display: "flex",
    flexDirection: "row",
    // columnGap: moderateScale(30),
    alignItems: "center",
    justifyContent: "space-between",
  },
  lifeScoreText: {
    fontSize: hp("1.8%"),
    color: "white",
    textTransform: "uppercase",
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    padding: hp("0.6%"),
  },
  lifePoints: {
    color: "#0AB8AD",
    fontSize: hp("3%"),
    fontWeight: "bold",
  },
  balanceText: {
    fontSize: hp("1.8%"),
    color: "white",
    textTransform: "uppercase",
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    padding: hp("0.6%"),
  },
  balancePoints: {
    color: "#0AB8AD",
    fontSize: hp("3%"),
    fontWeight: "bold",
  },
  targetContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: hp("2%"),
  },
  targetText: {
    fontSize: hp("2%"),
    textTransform: "uppercase",
    color: "white",
    letterSpacing: wp("3%"),
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    paddingVertical: hp("0.3%"),
    width: "100%",
  },
  targetPoints: {
    fontSize: hp("3%"),
    color: "#BDBDBD",
    fontWeight: "bold",
  },
  milestoneContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    // columnGap: moderateScale(30),
    alignItems: "center",
    justifyContent: "space-between",
    // padding: moderateScale(10),
    top: hp("2%"),
  },
  milstoneText: {
    padding: hp("1%"),
  },
  subPointsContainer: {
    display: "flex",
    flexDirection: "row",
    // columnGap: moderateScale(30),
    alignItems: "center",
    justifyContent: "space-between",
  },
  subjectText: {
    fontSize: hp("2%"),
    textTransform: "uppercase",
    color: "white",
    right: wp("1%"),
  },
  daysContainer: {
    backgroundColor: "rgba(217, 217, 217, 0.59)",
    paddingHorizontal: wp("3%"),
  },
  // claim: {
  //   borderWidth: 1,
  //   borderRadius: 2,
  //   borderColor: "#ddd",
  //   borderBottomWidth: 0,
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  //   elevation: 1,
  //   boxShadow: "inSet 10 16 27 7 rgba(197,255,244,0.48)",
  // },
  commonColor: {
    color: Colors.white,
  },
  commonfontSize: {
    fontSize: hp("2.5%"),
    color: Colors.white,
  },
  verticleLine: {
    height: "80%",
    width: 3,
    backgroundColor: "rgba(217, 217, 217, 0.38)",
  },
});

export default Rewards;
