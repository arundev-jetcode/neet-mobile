import React from "react";
import BottomBar from "./BottomBar";
import Test from "../screens/Test";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="BottomBar"
        options={{ headerShown: false }}
        component={BottomBar}
      />
      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
