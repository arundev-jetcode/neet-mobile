import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { LinearBgColor } from "../styles/Colors";
import { ImageBackground } from "react-native";
import StatusBar from "../components/StatusBar";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";
import Colors from "../styles/Colors";

const Ranking = () => {
  const BackgroundImg = require("../assets/BgImg.png");

  const RankingList = [
    { name: "Jhone wick", points: "180P", rank: "4th" },
    { name: "Ram", points: "180P", rank: "5th" },
    { name: "Guru", points: "160P", rank: "6th" },
    { name: "Parama", points: "150P", rank: "7th" },
    { name: "Lavanya", points: "155P", rank: "8th" },
    { name: "Rayan", points: "150P", rank: "9th" },
    ,
    { name: "kuku", points: "140P", rank: "10th" },
  ];

  return (
    <>
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
          <View style={styles.rankingContainer}>
            <View style={styles.profileContainer}>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <View style={styles.commonRank}></View>
              </View>
              <View style={styles.firstRank}></View>
              <View style={styles.commonRank}></View>
            </View>
          </View>

          <View style={{ flex: 1.6, alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "rgba(47, 47, 47, 0.45)",
                width: 350,
                borderRadius: 6,
              }}
            >
              <ScrollView style={{ marginVertical: 20 }}>
                {RankingList.map((res, index) => {
                  return (
                    <View key={index} style={styles.rankingList}>
                      <View style={styles.rankingListCards}>
                        <View style={styles.rankingListProfileCard}></View>
                        <View style={styles.rankingListDataContainer}>
                          <View style={styles.rankingDatacard}>
                            <View>
                              <Text style={styles.font}>{res?.name}</Text>
                              <Text style={styles.font}>{res?.points}</Text>
                            </View>
                            <Text style={styles.font}>{res?.rank}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}

                <View style={styles.rankingList}>
                  <View style={styles.yourRankingContainer}>
                    <View style={styles.yourRankBackground}>
                      <View style={styles.yourRankDataCard}>
                        <View>
                          <Text style={styles.font}>Arun</Text>
                          <Text style={styles.font}>120P</Text>
                        </View>
                        <Text style={styles.font}>14Th</Text>
                      </View>
                    </View>
                    <View style={styles.yourRankProfile}></View>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: "100%",
    height: "100%",
    // opacity:moderateScale(0.8),
    resizeMode: "stretch",
  },
  rankingContainer: {
    flex: moderateScale(0.9),
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: moderateScale(12),
    justifyContent: "center",
  },
  firstRank: {
    elevation: moderateScale(2),
    height: verticalScale(130),
    width: horizontalScale(125),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(999),
    overflow: "hidden",
    zIndex: 1,
    top: verticalScale(100),
  },
  commonRank: {
    elevation: moderateScale(2),
    height: verticalScale(100),
    width: horizontalScale(95),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(999),
    overflow: "hidden",
    zIndex: 1,
    top: verticalScale(100),
  },
  rankingList: {
    // flex:moderateScale(0.7),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(12),
  },
  rankingListCards: {
    display: "flex",
    flexDirection: "row",
    columnGap: moderateScale(12),
  },
  rankingListProfileCard: {
    backgroundColor: Colors.white,
    width: horizontalScale(55),
    height: verticalScale(55),
    borderRadius: moderateScale(6),
  },
  rankingListDataContainer: {
    backgroundColor: Colors.white,
    width: horizontalScale(250),
    height: verticalScale(55),
    borderRadius: moderateScale(6),
  },
  rankingDatacard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
  },
  font: {
    fontSize: moderateScale(18),
    fontWeight: "600",
  },
  yourRankingContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: moderateScale(12),
  },
  yourRankBackground: {
    backgroundColor: Colors.white,
    width: horizontalScale(250),
    height: verticalScale(80),
    borderRadius: moderateScale(6),
  },
  yourRankDataCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: horizontalScale(10),
  },
  yourRankProfile: {
    backgroundColor: Colors.white,
    width: horizontalScale(55),
    height: verticalScale(80),
    borderRadius: moderateScale(6),
  },
});
export default Ranking;
