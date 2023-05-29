import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookmarkNextScreen from "../screens/BookmarkScreen";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import New from "../screens/NewScreen";
import BottomBar from "./BottomBar";

const ScreenNavigation = (setAppState: any) => {
  const Stack = createStackNavigator();
  const value = "dddddd";
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Bottombar"
          component={BottomBar}
          initialParams={{ value: "text" }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Test"
          component={BookmarkNextScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="NewNext"
          component={New}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
