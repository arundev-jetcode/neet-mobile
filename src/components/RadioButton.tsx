import { Radio } from "native-base";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButtonProps } from "../interface/Interface";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
                    _text={{ fontSize: hp("1%") }}
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
    marginTop: hp("1.4%"),
    width: wp("80%"),
    padding: hp("1%"),
    borderRadius: hp(30),
  },
});
export default RadioButton;
