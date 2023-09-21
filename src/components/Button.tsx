import { Box, Button } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import { ButtonProps } from "../interface/Interface";

const Buttons = (buttonProps: ButtonProps) => {
  console.log(buttonProps,'buttonProps');
  
  return (
    <Button
      style={styles.container}
      width={buttonProps.width}
      height={buttonProps.height}
      fontSize={buttonProps.textSize}
      color={buttonProps.color}
      background={buttonProps.backgroundColor}
      onPress={buttonProps.callback}
    >
      {buttonProps.text}
    </Button>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    // width: "80%",
    // height: 50,
    // backgroundColor: "",
    color: "red",
    fontWeight: "bold",
    // fontSize: "80%",
  },
});

export default Buttons;
