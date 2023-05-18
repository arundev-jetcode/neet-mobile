import { View,Text,StyleSheet } from "react-native"
import React from "react"
import HeaderBar from "../navigation/Headerbar";
// import insets from "../styles/Responsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";

 const Home =(props:any)=>{
      console.log(props)
    const insets = useSafeAreaInsets(); 
    return(<>
      <View style={{backgroundColor:"red"}} >

      </View>
        <View style={{
            paddingTop:insets.top,
            paddingRight:insets.right,
            paddingBottom:insets.bottom,
            paddingLeft:insets.left
        }}>
            <HeaderBar/>
    </View>
    </>
    )
}


const styles = StyleSheet.create({

    // container:{
    //     paddingBottom:insets.bottom,
    //     paddingTop:insets.top,
    //     paddingRight:insets.right,
    //     paddingLeft:insets.left,
    // }
})

export default Home;