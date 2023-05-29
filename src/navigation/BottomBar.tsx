import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NavigationContainer,
  useNavigationContainerRef,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRankingStar } from "@fortawesome/free-solid-svg-icons/faRankingStar";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faBookmark } from "@fortawesome/free-solid-svg-icons/faBookmark";
import { faAward } from "@fortawesome/free-solid-svg-icons/faAward";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import Home from "../pages/Home";
import Bookmark from "../pages/Bookmark";
import Rewards from "../pages/Rewards";
import Profile from "../pages/Profile";
import Ranking from "../pages/Ranking";
import Notification from "../pages/Notification";
import Colors from "../styles/Colors";
import { moderateScale } from "../styles/Responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DefaultTheme, Provider } from "react-native-paper";

const BottomBar = (setAppState: any, value: any) => {
  const [bottomBarName, setBottomBarName] = useState<string>();
  const Tab = createMaterialBottomTabNavigator();
  const insets = useSafeAreaInsets();
  console.log(value, "settt");
  const bottombarDatas = [
    { iconName: "Home", icon: faHouse, screenName: Home },
    { iconName: "Bookmark", icon: faBookmark, screenName: Bookmark },
    { iconName: "Rewards", icon: faAward, screenName: Rewards },
    { iconName: "Notification", icon: faBell, screenName: Notification },
    { iconName: "Profile", icon: faUser, screenName: Profile },
    { iconName: "Ranking", icon: faRankingStar, screenName: Ranking },
  ];
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: "transparent", // Use transparent to disable the little highlighting oval
    },
  };
  let navigationRef = useNavigationContainerRef();
  navigationRef.addListener("state", (e) => {
    // You can get the raw navigation state (partial state object of the root navigator)

    // Or get the full state object with `getRootState()`

    let route = navigationRef.getCurrentRoute();
    // const routeName = getFocusedRouteNameFromRoute(route);
    console.log(route?.name, "route");

    if (route) {
      setBottomBarName(route.name);
      switch (route.name) {
        case "Home":
          setAppState({ bgColor: "#00474C", indicatorColor: "light" });
          break;
        default:
          setAppState({
            bgColor: "transparent",
            indicatorColor: "light",
          });
          break;
      }
    }
  });
  return (
    <>
      <Provider theme={theme}>
        {/* <NavigationContainer ref={navigationRef}> */}
        <Tab.Navigator
          style={{
            marginBottom: insets.bottom,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            padding: insets.right,
          }}
          initialRouteName="Home"
          // activeColor={Colors.white}
          barStyle={{
            backgroundColor: Colors.darkGreen,
            height: moderateScale(70),
          }}
        >
          {bottombarDatas.map((res, i) => {
            return (
              <Tab.Screen
                key={i}
                name={res.iconName}
                component={res.screenName}
                options={{
                  tabBarLabel: "",
                  tabBarIcon: ({ focused }) => (
                    <FontAwesomeIcon
                      icon={res.icon}
                      size={24}
                      color={focused ? Colors.yellow : Colors.white}
                    />
                  ),
                  // tabBarColor: "red",
                }}
              />
            );
          })}
        </Tab.Navigator>
        {/* </NavigationContainer> */}
      </Provider>
    </>
  );
};

export default BottomBar;
