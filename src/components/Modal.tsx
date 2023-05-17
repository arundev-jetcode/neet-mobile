import React from "react";
import {Image,View,Text} from "react-native";
import {Button, Center, Modal} from "native-base";
import  {ModalProps}  from "../interface/Interface";


const ModalBox=({showModal,modelData,setShowModal}:ModalProps)=>{


    return(
<Center>
        <Modal isOpen={showModal} onClose={() =>setShowModal(false)} >
          <Modal.Content maxWidth="304" maxH="246"  style={{backgroundColor: 'rgba(255,255,255, 0.7)'}} >
            <Modal.CloseButton />
            <Modal.Header>icons</Modal.Header>
            <Modal.Body>
           {modelData.map((res,index)=>{
            return(<View key={index} >
            <View  style={{display:"flex",flexDirection:"row",columnGap:30,alignContent:"center",backgroundColor:'#ffffff',marginTop:12,padding:5,borderRadius:9 }}>
            <Image source={res.img} style={{width:30,height:30}} />
            <Text style={{fontSize:20}} >{res.sub}</Text>
            </View>
            </View>)
           })}
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Center>

    )
}


export default ModalBox;