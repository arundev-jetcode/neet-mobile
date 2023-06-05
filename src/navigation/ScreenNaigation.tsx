import React from "react";
import BottomBar from "./BottomBar";
import Test from "../screens/Test";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondTest from "../screens/SecondTest";

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
      <Stack.Screen
        options={{ headerShown: false }}
        name="Test"
        component={Test}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SecondTest"
        component={SecondTest}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
