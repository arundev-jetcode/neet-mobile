import React, { useState } from "react";
import { Image, View, Text } from "react-native";
import { Button, Center, Modal, Pressable } from "native-base";
import { ModalProps, RadioButtonProps } from "../interface/Interface";
import { useNavigation } from "@react-navigation/native";
import RadioButton from "./RadioButton";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../styles/themes";
import Buttons from "./Button";
const ModalBox = ({
  showModal,
  modelData,
  setShowModal,
  showEmoji,
}: ModalProps) => {
  const StreaksImage = require("../assets/stricks.png");
  const SleepyImage = require("../assets/sleepyface.png");

  const options = [
    { label: "Incorrect answer", value: "inc" },
    { label: "Out of syllabus", value: "out" },
    { label: "Spelling mistake", value: "spelling" },
    { label: "Incorrect Explaination", value: "ince" },
  ];
  const navigation: any = useNavigation();
  console.log(modelData, "modalData");
  const Navigate = () => {
    console.log("clickkkku");
    navigation.navigate("Test");
  };
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content
          maxWidth="304"
          maxH="290"
          style={{ backgroundColor: "rgba(255,255,255, 0.7)" }}
        >
          <Modal.CloseButton  style={{padding:9}} />
          {showEmoji ? (
            <Modal.Header style={{ backgroundColor: "transparent" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={StreaksImage}
                    style={{ width: 50, height: 25 }}
                  />
                  <Text>33%</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={SleepyImage}
                    style={{ width: 25, height: 25 }}
                  />
                  <Text>33%</Text>
                </View>
              </View>
            </Modal.Header>
          ) : (
            ""
          )}
          <Modal.Body>
            {modelData?.map((res, index) => {
              // res.streaks ? setShowEmoji(true):setShowEmoji(false)
              return (
                <>
                  <Pressable key={index} onPress={Navigate}>
                    {res.sub ? (
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 25,
                          alignContent: 'flex-start',
                          backgroundColor: "#ffffff",
                          marginTop: 12,
                          padding: 5,
                          borderRadius: 9,
                          justifyContent: showEmoji? "flex-start":'space-around',
                        }}
                      >
                        {res.sub && res.img && (
                          <Image
                            source={res.img}
                            style={{ width: 30, height: 30 }}
                          />
                        )}
                        <Text style={{ fontSize: 20 }}>{res.sub}</Text>
                        {res.lock ? (
                          <FontAwesomeIcon
                            icon={faLock}
                            color={COLORS.lightGrey10}
                          />
                        ) : (
                          ""
                        )}
                      </View>
                    ) : (
                      ""
                    )}
                  </Pressable>
                  {res.title == "Active Silver Member" ? (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        columnGap: 12,
                        alignContent: "center",
                        backgroundColor: COLORS.light,
                        marginTop: 12,
                        padding: 5,
                        borderRadius: 9,
                        flexWrap:'wrap'
                      }}
                    >
                      <>
                        {res.img && (
                          <Image
                            source={res.img}
                            style={{ width: 80, height: 80 }}
                          />
                        )}
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                           
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 14,
                              color: COLORS.secondary06,
                              fontWeight: "bold",
                            }}
                          >
                            {res.title}
                          </Text>
                          <Text
                            style={{ fontSize: 12, color: COLORS.secondary06 }}
                          >
                            Validity expires
                          </Text>
                          <Text
                            style={{ fontSize: 12, color: COLORS.secondary06 }}
                          >
                            on 27.04.2023
                          </Text>

                          <Button>Upgrade</Button>
                          {/* <Buttons width={30} height={10} textSize={12} text={"Upgrade"} backgroundColor={"red"} /> */}
                        </View>
                      </>
                    </View>
                  ) : (
                    ""
                  )}

                  {res.date && (
                    <View
                      style={{
                        display: "flex",
                        backgroundColor: COLORS.light,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 9,
                        paddingVertical: 20,
                      }}
                    >
                      <Text style={{ color: COLORS.lightGrey21 }}>
                        NEET exam will held on
                      </Text>
                      <Text
                        style={{
                          fontSize: 27,
                          color: COLORS.primary09,
                          fontWeight: "bold",
                          textShadowColor: "black",
                          textShadowRadius: 0.5,
                          textShadowOffset: {
                            width: 1,
                            height: 1,
                          },
                        }}
                      >
                        {res.date}
                      </Text>
                    </View>
                  )}
                </>
              );
            })}
            {/* <RadioButton labelName={""} options={options}  /> */}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ModalBox;
