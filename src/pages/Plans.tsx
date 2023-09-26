import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    useWindowDimensions,
  } from "react-native";
  import React from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import StatusBar from "../components/StatusBar";
  import Theme from "../styles/themes";
  import { moderateScale } from "../styles/Responsive";
  import FontScale from "../styles/fontResponsive";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Buttons from "../components/Button";
  const Plans = () => {
    const BackgroundImg = require("../assets/BgImg.png");
    const insets = useSafeAreaInsets();
    const Top = insets.top = 82
    return (
      <>
        {/* <StatusBar bgColor={"transparent"} indicatorsColor={"light"}/> */}
        <LinearGradient
          colors={[
            Theme.COLORS.primary01,
            Theme.COLORS.primary02,
            Theme.COLORS.primary03,
            Theme.COLORS.primary05
          ]}
          style={styles.container}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          // locations={[1,0.75,1,1]}
        >
          <ImageBackground source={BackgroundImg} style={styles.Img} imageStyle={{backgroundColor:'rgba(0, 71, 76, 0.67)',opacity:0.3}} >
          <View style={{
            flex: 1,
            paddingTop: Top,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left}}>
      <View style={{flex: 2}} >
        <View style={{display:'flex',alignItems:'center'}} >
       <View style={{borderWidth:2,borderColor:'#02BCBC',display:'flex',alignItems:'center',paddingVertical:10,width:'80%',borderBottomColor:'#D9D9D9'}} >
        <Text style={{color:'#33FF00',textTransform:'uppercase',fontSize:12}} >Premimum features</Text>
        <Text style={{color:'#D5D5D5',fontSize:18}} >Go premimum</Text>
        <Text  style={{color:'#33FF00',textTransform:'uppercase',fontSize:12}} >Used to this features</Text>
       </View>
       <View style={{borderColor:'black',display:'flex',paddingVertical:10,width:'80%',backgroundColor:'#D9D9D9',borderBottomEndRadius:19}} >
       <View style={{display:'flex',alignItems:'center'}} >
        <View>
        <Text>Unlimited practice</Text>
        <Text>Full Access (100%  Questions)</Text>
        <Text>Subject wise practice</Text>
        <Text>Notes revision</Text>
        </View>
       </View>
       </View>
       </View>
      </View>
      <View style={{flex: 2}} >
        <View style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
      <View style={{width:'80%'}} >
          <Text style={styles.plansText}>PLANS</Text>
        </View>
        </View>
<View style={{display:'flex',alignItems:'center',marginTop:12}} >

<View style={{backgroundColor:'rgba(0, 0, 0, 0.55)',width:'80%',paddingVertical:10}} >
          <View style={{display:'flex'}} >
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:13}} >
              <Text style={styles.plansText}>One month</Text>
              <Text style={styles.plansText}>₹ 999</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor:'rgba(0, 0, 0, 0.55)',width:'80%',paddingVertical:10,marginTop:10}} >
          <View style={{display:'flex'}} >
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:13}} >
              <Text style={styles.plansText} >Valid Till NEET 2025</Text>
              <Text style={styles.plansText} >₹ 6,145</Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor:'rgba(0, 0, 0, 0.55)',width:'80%',paddingVertical:10,marginTop:10}} >
          <View style={{display:'flex'}} >
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:13}} >
              <Text  style={styles.plansText}>Valid Till NEET 2025</Text>
              <Text style={styles.plansText}>₹1,566</Text>
            </View>
          </View>
        </View>
       </View>
        
      </View>
      <View style={{flex: 3}}>
      <View style={{width:'90%'}} >
      <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}} >
        <View>
          <Text style={{textAlign:'right',color:'white'}}>TOTAL : ₹ 6,145</Text>
          <Text style={styles.plansText}>Prices inclusive of all taxes</Text>
          </View>
        </View>
        </View>
        <View style={{width:'100%'}} >
        <View style={{display:'flex',alignItems:'center'}} >
        <Buttons width={300} height={49} textSize={17} text={"Upgrade"} backgroundColor={"#dddddd"} textColor={"black"}/>
        </View>
        </View>
      </View>
    </View>
          </ImageBackground>
        </LinearGradient>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    Img: {
      width: "100%",
      height: "100%",
      // opacity: 0.8,
      resizeMode: "stretch",
    },
    plansText:{
      color:Theme.COLORS.light
    }
  });
  export default Plans;
  