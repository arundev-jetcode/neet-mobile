import { Box,Button } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";


const Buttons =()=>{

    return(
        
        <Button style={styles.container} fontSize={34}  onPress={() => console.log("hello world")}>Login</Button>
      
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 12,
        width: '80%',
        height:50,
        backgroundColor: "#003C31",
       color:"red",
       fontWeight:"bold",
       fontSize:"80%",
    }
})

export default Buttons;