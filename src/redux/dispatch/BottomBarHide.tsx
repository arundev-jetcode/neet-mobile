import React from "react";
import ActionType from "../Actiontype";

const HideBottomBar = (hide: boolean) => {
  return {
    type: ActionType.HIDE_BOTTOM_NAV,
    payload: hide,
  };
};
