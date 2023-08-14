import { StatusBar } from "expo-status-bar";
import React from "react";

const Statusbar = ({bgColor,indicatorsColor}:any)=>{
    return(
        <StatusBar
        backgroundColor={bgColor} translucent
         style={indicatorsColor}
      />
    )
}

export default Statusbar;