import React from "react";
import ActionType from "../Actiontype";

const initialValue = {
  statusbar: {
    bgColor: "#00474C",
    indicatorColor: "light",
    translucent: true,
  },
};

const Reducer = (state = initialValue, { type, payload }: any) => {
  switch (type) {
    case ActionType.STATUS_BAR:
      return {
        ...initialValue,
        payload: initialValue.statusbar,
      };
    default:
      return state;
  }
};

export default Reducer;
