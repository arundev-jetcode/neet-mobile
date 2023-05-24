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

const InputBox = ({
  inputType,
  placeholderName,
  componentName,
  fieldType,
  value,
  label,
  size,
}: LoginProps) => {
  const [service, setService] = React.useState("");
  const [show, setShow] = React.useState(false);
  const inputsize = size;
  if (placeholderName) {
  }
  return (
    <>
      {componentName === "Login" ? (
        <View style={styles.container}>
          {"username" == placeholderName ? (
            <Input
              placeholder="username"
              style={styles.input}
              type="text"
              InputLeftElement={
                <Icon
                  as={
                    "username" == placeholderName ? (
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

      {fieldType === "select" ? (
        <View style={styles.container}>
          <Select
            borderColor="transparent"
            selectedValue={service}
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            {label?.map((res, index) => {
              return <Select.Item label={res} value={value} />;
            })}
          </Select>
        </View>
      ) : (
        <View
          style={{
            marginTop: 12,
            width: inputsize ? verticalScale(340) : verticalScale(300),
            backgroundColor: inputsize ? "#505352" : "white",
            borderRadius: moderateScale(6),
          }}
        >
          <Input
            type={inputType}
            borderColor="transparent"
            placeholder={placeholderName}
            size={inputType}
            style={{ fontSize: moderateScale(18) }}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    width: verticalScale(300),
    backgroundColor: "white",
    borderRadius: moderateScale(6),
  },
  input: {
    height: verticalScale(50),
    fontSize: moderateScale(20),
    alignItems: "center",
  },
  username: {
    height: verticalScale(50),
    fontSize: horizontalScale(20),
    borderColor: "none",
  },
});

export default InputBox;
