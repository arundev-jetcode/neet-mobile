import React from "react";
import { Image, View, Text } from "react-native";
import { Button, Center, Modal, Pressable } from "native-base";
import { ModalProps } from "../interface/Interface";
import { useNavigation } from "@react-navigation/native";
const ModalBox = ({ showModal, modelData, setShowModal }: ModalProps) => {
  const navigation: any = useNavigation();
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
          <Modal.CloseButton />
          <Modal.Header style={{ backgroundColor: "transparent" }}>
            icons
          </Modal.Header>
          <Modal.Body>
            {modelData.map((res, index) => {
              return (
                <Pressable key={index} onPress={Navigate}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 30,
                      alignContent: "center",
                      backgroundColor: "#ffffff",
                      marginTop: 12,
                      padding: 5,
                      borderRadius: 9,
                    }}
                  >
                    <Image source={res.img} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 20 }}>{res.sub}</Text>
                  </View>
                </Pressable>
              );
            })}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default ModalBox;
