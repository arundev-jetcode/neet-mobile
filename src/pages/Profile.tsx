import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { faCamera, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import InputBox from "../components/Input";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Theme from "../styles/themes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../styles/Responsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Profile = () => {
  const [image, setImage] = useState<any>(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!_image.canceled) {
      _image.assets.map((res) => {
        console.log(res.uri);
        setImage(res.uri);
      });
    }
  };
  const BackgroundImg = require("../assets/BgImg.png");

  const inputDetails = [
    {
      inputType: "text",
      placeholderName: "Display Name",
      fieldType: "normal",
    },
    {
      inputType: "text",
      placeholderName: "Current Status",
      fieldType: "select",
      value: "12th",
      label: ["10th", "11th", "12th"],
    },
    {
      inputType: "text",
      placeholderName: "Email",
      fieldType: "normal",
    },
    {
      inputType: "text",
      placeholderName: "Target Exam",
      fieldType: "select",
      value: "Neet",
      label: ["Neet", "yyyy", "xxxx"],
    },
    {
      inputType: "text",
      placeholderName: "Target Year",
      fieldType: "select",
      value: "2023",
      label: ["2024", "2025", "2026"],
    },
    {
      inputType: "text",
      placeholderName: "Phone Number",
      fieldType: "normal",
    },
  ];

  const insets = useSafeAreaInsets();
  return (
    <>
      {/* <StatusBar bgColor={"transparent"} indicatorsColor={"light"}/> */}
      <LinearGradient
        colors={[
          Theme.COLORS.primary01,
          Theme.COLORS.primary02,
          Theme.COLORS.primary03,
          Theme.COLORS.primary05
        ]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        // locations={[1,0.75,1,1]}
      >
        <ImageBackground source={BackgroundImg} style={styles.Img}>
          <ScrollView style={{flex:1}}
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false} >
          <View style={styles.profileContainer}>
            <View style={{ position: "relative", zIndex: 1 }}>
              <View style={styles.imgcontainer}>
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 150, height: 150 }}
                  />
                )}
              </View>
              <View style={styles.uploadBtnContainer}>
                <TouchableOpacity onPress={addImage}>
                  <AntDesign name="camera" size={28} color={"black"} />
                </TouchableOpacity>
              </View>
            </View>

            {/* <View>
                <View style={styles.rounded} >
                <Text style={styles.firstLetter} >A</Text>
                </View>
                <View style={styles.iconContainer} >
                <TouchableOpacity onPress={addImage}  >
                <FontAwesomeIcon icon={faCamera} size={24} color="white"  />
                            
                            </TouchableOpacity>
                </View>
                </View>    */}

            <View style={styles.inputTotalContainer}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignContent: "center",
                }}
              >
                <Text style={styles.nameClass}>Arun dev</Text>
                <Text style={styles.nameClass}>12th</Text>
              </View>
              <View style={styles.profileInfoIcon}>
                <Text style={styles.profileInfoText}>Profile Info</Text>
                <FontAwesomeIcon
                  size={24}
                  icon={faPenToSquare}
                  color={Theme.COLORS.light}
                />
              </View>
              {inputDetails.map((data, index) => {
                return (
                  <View key={index}>
                    <InputBox
                      inputType={data.inputType}
                      placeholderName={data.placeholderName}
                      fieldType={data.fieldType}
                      value={data.value}
                      label={data.label}
                    />
                  </View>
                );
              })}
            </View>
          </View>
          </ScrollView>
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
    paddingTop:StatusBar.currentHeight
  },
  Img: {
    width: wp("100%"),
    height: hp("100%"),
    resizeMode: "stretch",
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgcontainer: {
    // elevation: moderateScale(2),
    height:wp(34),
    width: wp(34),
    backgroundColor: "#efefef",
    borderRadius:wp(17),
    overflow: "hidden",
    top: hp(4),
    // borderWidth: 3,
    position: "relative",
  },
  uploadBtnContainer: {
    opacity: moderateScale(0.7),
    position: "absolute",
    left: horizontalScale(110),
    bottom: 0,
  },
  inputTotalContainer: {
    backgroundColor: "rgba(47, 47, 47, 0.45)",
    paddingHorizontal: wp("6%"),
    paddingVertical: hp("2%"),
    paddingTop: hp("5%"),
    borderRadius: 6,
    position: "relative"
  },
  profileInfoIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileInfoText: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: Theme.COLORS.light,
  },
  nameClass: {
    textAlign: "center",
    fontSize: hp("2.6%"),
    color: Theme.COLORS.light,
  },
});

export default Profile;
