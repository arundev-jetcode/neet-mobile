import { View,Text,StyleSheet, ImageBackground,Image } from "react-native"
import React from "react"
import { LinearGradient } from "expo-linear-gradient"
import InputBox from "../components/Input";
import { LoginProps } from "../interface/Interface";
import Buttons from "../components/Button";
import { COLORS } from "../styles/themes";

const Login=()=>{

    const BackgroundImg = require("../assets/BgImg.png");
    const logo = require("../assets/appLogo.png");

const inputDetails = [
  {
    inputType:'text',
    placeholderName:'username'
  },
  {
    inputType:'password',
    placeholderName:'Password'
  }
]
 
    return(
        <LinearGradient
        colors={[
          COLORS.primary01,
          COLORS.primary02,
          COLORS.primary03,
          COLORS.primary05
        ]}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        // locations={[1,0.75,1,1]}
      >
        <ImageBackground source={BackgroundImg}  style={styles.Img} >
           <View  style={styles.LoginContainer}>
            <Image source={logo} style={{width:"40%",height:"21%"}} />
            {inputDetails.map((data,index)=>{
              return(
                <InputBox key={index} inputType={data.inputType} placeholderName={data.placeholderName} componentName="Login" />
               
              )
            })}
            {/* <Buttons/> */}
            <View style={{width:"80%",marginTop:12,display:"flex",flexDirection:"row",columnGap:12}} >
            <Text style={{fontSize:20,color:"white"}} >Do you have an account yet ?</Text>
            <Text style={{fontSize:20}} >Signup</Text>

            </View>
         </View>
    </ImageBackground> 

      </LinearGradient>
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
    LoginContainer:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
    }
  });

  export default Login;