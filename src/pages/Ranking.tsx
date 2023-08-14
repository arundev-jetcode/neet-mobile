import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
const Ranking = () => {
  const BackgroundImg = require("../assets/background.png");
  const RankingList = [
    { name: "Jhone wick", points: "180P", rank: "4th" },
    { name: "Ram", points: "180P", rank: "5th" },
    { name: "Guru", points: "160P", rank: "6th" },
    { name: "Parama", points: "150P", rank: "7th" },
    { name: "Lavanya", points: "155P", rank: "8th" },
    { name: "Rayan", points: "150P", rank: "9th" },
    { name: "kuku", points: "140P", rank: "10th" },
  ];
  return (
    <ImageBackground source={BackgroundImg} style={style.Img}>
      <SafeAreaProvider>
        <View style={style.rankingContainer}>
          <View style={style.profileContainer}>
            <View style={style.commonRank}></View>
            <View style={style.firstRank}></View>
            <View style={style.commonRank}></View>
          </View>
        </View>
        <View style={{ flex: 1.6, alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "rgba(47, 47, 47, 0.45)",
              width: width / 1.1,
              borderRadius: 1.9 / 2,
              height: height / 1.9,
            }}
          >
            <ScrollView style={{ marginVertical: "1%" }}>
              {RankingList.map((res, index) => {
                return (
                  <View key={index} style={style.rankingList}>
                    <View style={style.rankingListCards}>
                      <View style={style.rankingListProfileCard}></View>
                      <View style={style.rankingListDataContainer}>
                        <View style={style.rankingDatacard}>
                          <View>
                            <Text style={style.font}>{res?.name}</Text>
                            <Text style={style.font}>{res?.points}</Text>
                          </View>
                          <Text style={style.font}>{res?.rank}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaProvider>
    </ImageBackground>
  );
};
const style = StyleSheet.create({
  Img: {
    width: "100%",
    height: "100%",
    // opacity:moderateScale(0.8),
    resizeMode: "stretch",
  },
  rankingContainer: {
    flex: 0.9,
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: hp("1.7%"),
    justifyContent: "center",
  },
  firstRank: {
    // elevation: hp("2%"),
    height: 110,
    width: 110,
    backgroundColor: "white",
    borderRadius: 110/2,
    overflow: "hidden",
    // zIndex: 1,
    top: "20%",
  },
  commonRank: {
    // elevation: 40,
    height: 90,
    width: 90,
    backgroundColor: "white",
    borderRadius: 90/2,
    // overflow: "hidden",
    zIndex: 1,
    top: "20%",
  },
  rankingList: {
    // flex:moderateScale(0.7),
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5%",
  },
  rankingListCards: {
    display: "flex",
    flexDirection: "row",
    columnGap: hp("1%"),
  },
  rankingListProfileCard: {
    backgroundColor: "white",
    width: width / 7,
    height: height / 15,
    borderRadius: 15 / 2,
  },
  rankingListDataContainer: {
    backgroundColor: "white",
    width: width / 1.7,
    height: height / 15,
    borderRadius: 15 / 2,
  },
  rankingDatacard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp("2%"),
  },
  font: {
    fontSize: hp("2.1%"),
    fontWeight: "normal",
  },
});

export default Ranking;
