import { View, Text, StyleSheet, ImageBackground, Button,Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors, { LinearBgColor } from "../styles/Colors";
import {  Pressable } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";
import InputBox from "../components/Input";
import RadioButton from "../components/RadioButton";
import {
  faMagnifyingGlass,
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ThemeContext } from "../../App";
import { useNavigation } from "@react-navigation/native";
import ModalBox from "../components/Modal";
import Buttons from "../components/Button";
import {SvgXml} from 'react-native-svg';
import ArrowSvg from "../components/ArrowSvg";
// import arrow from "../assets/arrow-progress-bar.svg"

const SecondTest = () => {
  const BackgroundImg = require("../assets/BgImg.png");
  const navigate = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModelData] = useState<any>([]);

  const options = [
    { label: "Decreases", value: "a" },
    { label: "Increases", value: "b" },
    { label: "Remains the same", value: "c" },
    { label: "Is equal to the atmospheric pressure", value: "d" },
  ];
  const report = [
    { label: "Incorrect answer", value: "inc" },
    { label: "Out of syllabus", value: "out" },
    { label: "Spelling mistake", value: "spelling" },
    { label: "Incorrect Explaination", value: "ince" },
  ];
  const OpenReport = (data: number) => {
    switch (data) {
      case 0:
        setModelData([
          { id: 1, sub: "NEET" },
          { id: 2, sub: "Chemistry" },
          { id: 3, sub: "Botany" },
          { id: 4, sub: "Physics" },
        ]);
        break;
      case 1:
        setModelData([]);
        break;
      default:
        break;
    }
    setShowModal(true);
  };
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
         <ArrowSvg/>
              <Pressable
                onPress={() => navigate.goBack()}
                style={{
                  display: "flex",
                  backgroundColor: "#505352",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 10,
                }}
              >
                <FontAwesomeIcon icon={faXmark} color="white" />
              </Pressable>
            </View>
            <View
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
              <Pressable
                onPress={() => OpenReport(0)}
                style={{
                  marginTop: verticalScale(14),
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: moderateScale(12),
                }}
              >
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  size={24}
                  color={Colors.yellow}
                />
                <Text style={{ color: Colors.white }}>Report issue</Text>
                
                <ModalBox
                  setShowModal={setShowModal}
                  showModal={showModal}
                  report={report}
                />
              </Pressable>
              <View>
                  <Text style={{marginTop:12,color:Colors.white,fontWeight:'800'}} >Explaination</Text>
                  <Text>If a soap bubble expands, the pressure inside the bubbleIf a If a soap bubble expands, the pressure inside bubble soap bubble expands,the pressure inside the bubble.pressure inside bubble soap bubble expands,the pressure inside the bubbleIf a soap bubble expands, the pressure inside the bubbleIf a If a soap bubble expands, the pressure inside bubble soap bubble expands,the pressure inside the bubble.pressure inside bubble soap bubble expands,the pressure inside the bubble</Text>
                </View>
            </View>
            <Buttons
              width={"100"}
              height={"50"}
              textSize={0}
              text={"Check"}
              backgroundColor={"green"}
              textColor={"red"}
            />
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default SecondTest;

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
