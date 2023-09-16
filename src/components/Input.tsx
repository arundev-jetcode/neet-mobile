import React from "react";
import {
  CheckIcon,
  Flex,
  Icon,
  Input,
  Pressable,
  Select,
  View,
} from "native-base";
import { LoginProps } from "../interface/Interface";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../styles/Responsive";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const InputBox = (props: LoginProps) => {
  const [service, setService] = React.useState("");
  const [show, setShow] = React.useState(false);
  const inputsize = props?.size;
  if (props?.placeholderName) {
  }
  return (
    <>
      {props?.componentName === "Login" ? (
        <View style={styles.container}>
          {"username" == props?.placeholderName ? (
            <Input
              placeholder="username"
              style={styles.input}
              type="text"
              InputLeftElement={
                <Icon
                  as={
                    "username" == props?.placeholderName ? (
                      <FontAwesomeIcon
                        icon={faUser}
                        style={{ marginLeft: 12 }}
                        size={24}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faLock} />
                    )
                  }
                  size={5}
                  ml="2"
                />
              }
            />
          ) : (
            <Input
              type={show ? "text" : "password"}
              placeholder="Password"
              style={styles.input}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <FontAwesomeIcon
                        icon={show ? faEye : faEyeSlash}
                        size={24}
                        style={{ marginRight: 12 }}
                      />
                    }
                    size={10}
                  />
                </Pressable>
              }
            />
          )}
        </View>
      ) : (
        ""
      )}

      {props?.fieldType === "select" ? (
        <View style={styles.container}>
          <Select
            borderColor="transparent"
            selectedValue={service}
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            fontSize={wp("4%")}
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            {props?.label?.map((res, index) => {
              return <Select.Item label={res} value={props?.value} />;
            })}
          </Select>
        </View>
      ) : (
        <View
          style={{
            marginTop: !inputsize ? 12 : 0,
            width: inputsize ? "100%" :"100%",
            backgroundColor: inputsize ? "#505352" : "white",
            borderRadius: moderateScale(6),
          }}
        >
          <Input
            type={props?.inputType}
            borderColor="transparent"
            placeholder={props?.placeholderName}
            // size={inputType}
            style={{ fontSize: moderateScale(15) }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: wp(76),
    backgroundColor: "white",
    borderRadius: 6,
  },
  input: {
    height: hp(20),
    fontSize: hp(30),
    alignItems: "center",
    width:wp(10)
  },
  username: {
    height: verticalScale(50),
    fontSize: horizontalScale(20),
    borderColor: "none",
  },
});

export default InputBox;
