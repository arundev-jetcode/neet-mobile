import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import ModalBox from "../components/Modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../styles/Colors";
import { HeaderMenuprops } from "../interface/Interface";
import { Pressable } from "native-base";

const HeaderBar = () => {
  const [modelData, setModelData] = useState<HeaderMenuprops[]>([]);
  const [showModal, setShowModal] = useState(false);
  const insets = useSafeAreaInsets();
  const Botany = require("../assets/botany.png");
  const Silver = require("../assets/Silver.png");
  const streak = require("../assets/stricks.png");
  const stethoscope = require("../assets/stethoscope.png");
  const chemistry = require("../assets/chemistry.png");
  const physics = require("../assets/physics.png");
  const headerIcons = [
    { iconName: "streak", icon: streak },
    { iconName: "stethoscope", icon: stethoscope },
    { iconName: "Silver", icon: Silver },
  ];
  const handleClick = (index: number) => {
    console.log(index, "indexxxxx");

    switch (index) {
      case 0:
        setModelData([
          { id: 1, img: stethoscope, sub: "NEET" },
          { id: 2, img: chemistry, sub: "Chemistry" },
          { id: 3, img: Botany, sub: "Botany" },
          { id: 4, img: physics, sub: "Physics" },
        ]);
        break;
      case 1:
        setModelData([{ id: 1, img: stethoscope, sub: "NEET" }]);
        break;
      default:
        break;
    }
    setShowModal(true);
  };
  return (
    <View style={HeaderMenuStyle.container}>
      <View style={HeaderMenuStyle.imgContainer}>
        {headerIcons.map((res, index) => {
          return (
            <View key={index}>
              <Pressable onPress={() => handleClick(index)}>
                <Image source={res.icon} style={HeaderMenuStyle.imageStyle} />
              </Pressable>
            </View>
          );
        })}
        <View style={HeaderMenuStyle.neetContainer}>
          <View style={HeaderMenuStyle.neetSubContainer}>
            <Text style={HeaderMenuStyle.neetDay}>106</Text>
            <Text style={HeaderMenuStyle.neetDay}>Days</Text>
          </View>
          <Text style={HeaderMenuStyle.neet}>NEET</Text>
        </View>
      </View>
      <ModalBox
        showModal={showModal}
        modelData={modelData}
        setShowModal={setShowModal}
      />
    </View>
  );
};

const HeaderMenuStyle = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.darkGreen,
  },
  imageStyle: {
    width: 50,
    height: 45,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  neetContainer: {
    backgroundColor: Colors.tertiary,
  },
  neetSubContainer: {
    display: "flex",
    flexDirection: "row",
  },
  neetDay: {
    fontSize: 12,
  },

  neet: {
    fontSize: 20,
  },
});
export default HeaderBar;
