import { View,Text,StyleSheet, ImageBackground,Image, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { LinearBgColor } from "../styles/Colors"
import StatusBar from "../components/StatusBar"
import { faCamera, faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import InputBox from "../components/Input"
import React, { useState, useEffect } from 'react';
// import { Image, View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import  Colors from "../styles/Colors"

 const Profile =()=>{

  const [image, setImage] = useState<any>(null);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
      

    });

    // console.log(JSON.stringify(_image));
  if (!_image.canceled) {
    // setImage(_image);
   _image.assets.map((res)=>{
    console.log(res.uri)
    setImage(res.uri);

})
  }
  };
    const BackgroundImg = require("../assets/BgImg.png")

    const inputDetails =[
      {
        inputType:'text',
        placeholderName:'Display Name',
        fieldType:"normal"
      },
      {
        inputType:'text',
        placeholderName:'Current Status',
        fieldType:"select",
        value:"12th",
        label:['10th','11th','12th']

      },
      {
        inputType:'text',
        placeholderName:'Email',
        fieldType:"normal"
      },
      {
        inputType:'text',
        placeholderName:'Target Exam',
        fieldType:"select",
        value:"Neet",
        label:['Neet','yyyy','xxxx']
      },
      {
        inputType:'text',
        placeholderName:'Target Year',
        fieldType:"select",
        value:"2023",
        label:['2024','2025','2026'],
      },
      {
        inputType:'text',
        placeholderName:'Phone Number',
        fieldType:"normal"
      },
    ]
    return(
      <>
       {/* <StatusBar bgColor={"transparent"} indicatorsColor={"light"}/> */}
      
      
        <LinearGradient
        colors={[LinearBgColor.hospitalblue1,LinearBgColor.hospitalblue2,LinearBgColor.hospitalblue3,LinearBgColor.hospitalblue4]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        // locations={[1,0.75,1,1]}
      >
        <ImageBackground source={BackgroundImg
    }  style={styles.Img}  >

              <View style={styles.profileContainer} >
              <View style={styles.imgcontainer}>
                {
                    image  && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
                }
                    <View style={styles.uploadBtnContainer}>
                        <TouchableOpacity onPress={addImage} style={styles.uploadBtn} >
                            <AntDesign name="camera" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
            </View>
                {/* <View>
                <View style={styles.rounded} >
                <Text style={styles.firstLetter} >A</Text>
                </View>
                <View style={styles.iconContainer} >
                <TouchableOpacity onPress={addImage}  >
                <FontAwesomeIcon icon={faCamera} size={24} color="white"  />
                            
                            </TouchableOpacity>
                </View>
                </View>    */}


              <View style={styles.inputTotalContainer} > 
              <View style={{display:"flex",justifyContent:"center",flexDirection:"column",alignContent:"center"}} >
              <Text style={styles.nameClass} >Arun dev</Text>
              <Text style={styles.nameClass} >12th</Text>
                </View> 

              <View style={styles.profileInfoIcon} >
              <Text style={styles.profileInfoText} >Profile Info</Text>
              <FontAwesomeIcon  size={24} icon={faPenToSquare} color={Colors.white} />
                </View>             
    {inputDetails.map((data,index)=>{
    return(
      <InputBox key={index} inputType={data.inputType} placeholderName={data.placeholderName} fieldType={data.fieldType} value={data.value} label={data.label} />
    )
  })}
 
 </View>
            
</View>

  
    </ImageBackground> 

      </LinearGradient>
      </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    Img:{
      width: '100%',
      height: '100%',
      opacity:0.8,
      resizeMode:'stretch'
    },
    profileContainer:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",    
    },
    rounded:{
      backgroundColor:"white",
      paddingVertical:30,
      paddingHorizontal:50,
      borderRadius:80,
      position:"relative",
      shadowColor: '#00D8BE',
      shadowOffset: {
      width: 0,
     height: 1,
     },
     shadowOpacity: 0.22,
   shadowRadius: 2.22,
    elevation: 3,
    },
    firstLetter:{
      fontSize:70
    },
    iconContainer:{
      position:"absolute" ,
      paddingLeft:84,
      paddingTop:95

    },
    imgcontainer:{
      elevation:2,
      height:150,
      width:150,
      backgroundColor:'#efefef',
      position:'absolute',
      borderRadius:999,
      overflow:'hidden',
      zIndex:1,
      top:100
  },
  uploadBtnContainer:{
      opacity:0.7,
      position:'absolute',
      right:12,
      // left:60,
      bottom:0,
      // backgroundColor:'lightgrey',
      width:'100%',
      height:'25%',
  },
  uploadBtn:{
      display:'flex',
      alignItems:"center",
      justifyContent:'center'
  },
  inputTotalContainer:{
    backgroundColor:"rgba(47, 47, 47, 0.45)",
    paddingHorizontal:20,
    paddingVertical:40,
    paddingTop:110,
    borderRadius:6,
    position:'relative',
    top:70
  },
  profileInfoIcon:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  profileInfoText:{
    fontSize:24,
    fontWeight:"bold",
    color:Colors.white
  },
  nameClass:{
    textAlign:"center",
    fontSize:24,
    color:Colors.white
  }
  });
export default Profile;