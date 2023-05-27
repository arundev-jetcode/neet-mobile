import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BookmarkNextScreen from "../screens/BookmarkScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BookmarkNext" component={BookmarkNextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigation;
