import React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons/faRankingStar'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward'
import { faBell } from '@fortawesome/free-solid-svg-icons/faBell'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import Home from "../pages/Home";
import Bookmark from "../pages/Bookmark";
import Rewards from "../pages/Rewards";
import Profile from "../pages/Profile";
import Ranking from "../pages/Ranking";
import Notification from "../pages/Notification"
import  Colors  from "../styles/Colors";


const BottomBar = ()=>{

    const Tab = createMaterialBottomTabNavigator();
    const bottombarDatas =[
        {iconName:"Home",
        icon:faHouse,
        screenName:Home
        },
        {iconName:"Bookmark",
        icon:faBookmark,
        screenName:Bookmark
        },
        {iconName:"Rewards",
        icon:faAward,
        screenName:Rewards
        },
        {iconName:"Notification",
        icon:faBell,
        screenName:Notification
        },
        {iconName:"Profile",
        icon:faUser,
        screenName:Profile
        },
        {iconName:"Ranking",
        icon:faRankingStar,
        screenName:Ranking
    
        },
    
    ]

    return(
   <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.white}
      barStyle={{ backgroundColor: Colors.darkGreen }}
    >
      {bottombarDatas.map((res,i)=>{
        return(
          <Tab.Screen
          key={i}
          name={res.iconName}
          component={res.screenName}
          options={{
            tabBarIcon: ({ focused }) => (
               <FontAwesomeIcon icon={res.icon} size={24} color={focused ? Colors.yellow:Colors.white} />
            ),
          }}
        />
        )
      })}
    </Tab.Navigator>
    </NavigationContainer>

    )
}

export default BottomBar