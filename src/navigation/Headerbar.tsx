import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import ModalBox from "../components/Modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors, { COLORS } from "../styles/themes";
import { PopupModal } from "../interface/Interface";
import { Pressable } from "native-base";

const HeaderBar = () => {
  const [modelData, setModelData] = useState<PopupModal[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showEmoji, setshowEmoji] = useState(false);

  const insets = useSafeAreaInsets();
  const Botany = require("../assets/botany.png");
  const Silver = require("../assets/Silver.png");
  const streak = require("../assets/stricks.png");
  const stethoscope = require("../assets/stethoscope.png");
  const chemistry = require("../assets/chemistry.png");
  const physics = require("../assets/physics.png");
  const headerIcons = [
    { iconName: "streak", icon: streak,percentage:'30%' },
    { iconName: "stethoscope", icon: stethoscope,percentage:'40%' },
    { iconName: "Silver", icon: Silver },
  ];
  const handleClick = (index: number) => {
    console.log(index, "indexxxxx");

    switch (index) {
      case 0:
        setModelData([
          { id: 1, img: stethoscope, sub: "3 Days",streaks:true },
          { id: 2, img: chemistry, sub: "10 Days" ,streaks:true},
          { id: 3, img: Botany, sub: "12 Days",streaks:true },
          { id: 4, img: physics, sub: "15 Days",streaks:true },
        ]);
        setshowEmoji(true);
        break;
      case 1:
      setModelData([
        { id: 1, img: stethoscope, sub: "NEET" ,lock:true},
        { id: 2, img: chemistry, sub: "Chemistry",lock:true },
        { id: 3, img: Botany, sub: "Botany",lock:true },
        { id: 4, img: physics, sub: "Physics",lock:true },
      ]);
      setshowEmoji(false);
        break;
        case 2: 
      setModelData([
        { id: 1, img: Silver,title:'Active Silver Member'}
      ]);
      setshowEmoji(false);

          break;
          case 3: 
          setModelData([
            { id: 1,title:'NEET exam will held on',date:'07.05.2023'}
          ]);
      setshowEmoji(false);

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
                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
                <Image source={res.icon} style={HeaderMenuStyle.imageStyle} />
                <Text style={{color:COLORS.light,fontSize:18}} >{res.percentage}</Text>
                </View>

              </Pressable>
            </View>
          );
        })}
        <Pressable onPress={() => handleClick(3)}>
        <View style={HeaderMenuStyle.neetContainer}>
          <View style={HeaderMenuStyle.neetSubContainer}>
            <Text style={HeaderMenuStyle.neetDay}>106</Text>
            <Text style={HeaderMenuStyle.neetDay}>Days</Text>
          </View>
          <Text style={HeaderMenuStyle.neet}>NEET</Text>
        </View>
        </Pressable>
      </View>
      <ModalBox
        showModal={showModal}
        modelData={modelData}
        setShowModal={setShowModal}
        showEmoji={showEmoji}
      />
    </View>
  );
};

const HeaderMenuStyle = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: COLORS.secondary01,
  },
  imageStyle: {
    width: 50,
    height: 45,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  neetContainer: {
    backgroundColor: COLORS.primary08,
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
