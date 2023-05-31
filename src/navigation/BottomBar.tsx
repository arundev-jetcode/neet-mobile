import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  NavigationContainer,
  useNavigationContainerRef,
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
import { DefaultTheme, Provider } from "react-native-paper";
import { ThemeContext } from "../../App";

const BottomBar = () => {
  const Tab = createMaterialBottomTabNavigator();
  const [appState, setAppState] = React.useContext(ThemeContext);
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

  return (
    <Provider theme={theme}>
      {/* <NavigationContainer ref={navigationRef}> */}
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={Colors.white}
        barStyle={{ backgroundColor: Colors.darkGreen }}
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
              }}
            />
          );
        })}
      </Tab.Navigator>
      {/* </NavigationContainer> */}
    </Provider>
  );
};

export default BottomBar;
