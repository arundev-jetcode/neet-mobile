import { Radio } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButtonProps } from "../interface/Interface";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";

const RadioButton = ({ labelName, options, report }: RadioButtonProps) => {
  const [value, setValue] = React.useState("one");
  return (
    <>
      <Radio.Group
        defaultValue="1"
        name="exampleGroup"
        accessibilityLabel="favorite colorscheme"
      >
        {options?.map((res, index) => {
          return (
            <>
              <View style={Styles.container}>
                <Radio
                  colorScheme="emerald"
                  _text={{ fontSize: moderateScale(15) }}
                  value={res.value}
                  my={1}
                  key={index}
                  size={4}
                  backgroundColor={"#707070"}
                >
                  {res.label}
                </Radio>
              </View>
            </>
          );
        })}
      </Radio.Group>
      {
        <Radio.Group
          defaultValue="1"
          name="exampleGroup"
          accessibilityLabel="favorite colorscheme"
        >
          {report?.map((res, index) => {
            return (
              <>
                <View style={Styles.container}>
                  <Radio
                    colorScheme="emerald"
                    _text={{ fontSize: moderateScale(15) }}
                    value={res.value}
                    my={1}
                    key={index}
                    size={4}
                    backgroundColor={"#707070"}
                  >
                    {res.label}
                  </Radio>
                </View>
              </>
            );
          })}
        </Radio.Group>
      }
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginTop: verticalScale(12),
    width: horizontalScale(293),
    padding: moderateScale(7),
    borderRadius: moderateScale(30),
  },
});
export default RadioButton;
