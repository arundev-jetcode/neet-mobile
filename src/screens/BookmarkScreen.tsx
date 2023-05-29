import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const TestScreen = () => {
  const navigation: any = useNavigation();

  return (
    <View>
      <Text>Hiiiiii</Text>
      {/* <Button onPress={()=>navigation.navigate("")}>click me</Button>
       */}
    </View>
  );
};

export default TestScreen;
