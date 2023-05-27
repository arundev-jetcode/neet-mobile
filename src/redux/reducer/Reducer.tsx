import React from "react";
import ActionType from "../Actiontype";

const initialValue = {
  hide: false,
};

const Reducer = (state = initialValue, { type, payload }: any) => {
  switch (type) {
    case ActionType.HIDE_BOTTOM_NAV:
      return {
        ...initialValue,
        payload: initialValue.hide,
      };
    default:
      return state;
  }
};

export default Reducer;
