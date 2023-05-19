import React from "react";
import { CheckIcon, Flex, Icon, Input, Pressable, Select, View } from "native-base"
import { LoginProps } from "../interface/Interface";
import { StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faEye, faEyeSlash, faLock } from "@fortawesome/free-solid-svg-icons";


const InputBox = ({ inputType, placeholderName,componentName,fieldType,value,label }: LoginProps) => {
    const [service, setService] = React.useState("");
    const [show, setShow] = React.useState(false);
    if (placeholderName) {

    }
    return (<>
   
    {componentName==="Login" ?  <View style={styles.container} >
            {"username" == placeholderName ? <Input placeholder='username' style={styles.input} type="text"
                InputLeftElement={<Icon as={"username" == placeholderName ? <FontAwesomeIcon icon={faUser}style={{marginLeft:12}} size={24} />
                    : <FontAwesomeIcon icon={faLock} />} size={5} ml="2"  />}
            /> : <Input type={show ? "text" : "password"} placeholder='Password' style={styles.input}
            
                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<FontAwesomeIcon icon={show ? faEye : faEyeSlash} size={24} style={{marginRight:12}} />} size={10}   />
                </Pressable>
                }
            />}

      
        </View>
    :""  
    }
   
    
    
    {fieldType ==="select" ?  <View style={styles.container} >
       <Select borderColor="transparent" selectedValue={service} minWidth="320"  accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
        {label?.map((res,index)=>{
            return(
                <Select.Item label={res} value={value} />

            )
        })}
         
        </Select>
        </View>:  <View style={styles.container} >
<Input minWidth="320" type={inputType} borderColor="transparent" placeholder={placeholderName} />

    </View>}
       
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        width: '80%',
        backgroundColor: "white",
        borderRadius:6
    
    },
    input: {
        height: 50, 
        fontSize: 20,
        alignItems:"center"
    
    },
    username:{
        height: 50, 
        fontSize: 20,
        borderColor:"none",

    }
});


export default InputBox;