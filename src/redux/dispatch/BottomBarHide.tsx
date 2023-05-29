import React from "react";
import ActionType from "../Actiontype";

const HideBottomBar = (statusbar: {}) => {
  return {
    type: ActionType.STATUS_BAR,
    payload: statusbar,
  };
};
