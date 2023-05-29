import { Button } from "native-base";
import React from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {} from "react-native-gesture-handler";
const New = () => {
  const navigation: any = useNavigation();
  const ClickBtn = () => {
    console.log("cllickkkkkuu");
    navigation.navigate("BookmarkNext");
  };
  return (
    <>
      <Pressable onPress={ClickBtn}>
        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>

        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>
        <Text>I'm pressable!</Text>
      </Pressable>
    </>
  );
};

export default New;
