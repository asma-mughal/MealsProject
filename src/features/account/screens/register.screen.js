import React, { useContext, useState } from "react";
import {AccountBackground,AccountContainer,AccountCover,AccountHeading} from '../components/authentication.styles';
import { Text, View ,StyleSheet, Image} from "react-native";
import { TextInput, Button ,ActivityIndicator, Colors  } from 'react-native-paper';
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
export const RegsiterScreen = ({navigation}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const {  onRegister,error,isLoading} = useContext(AuthenticationContext);
    return(
    <>
    <AccountBackground>
        <AccountCover />
        <AccountHeading>
            <Text>Meals To Go</Text></AccountHeading>
    <AccountContainer>
    <View style={styles.ViewInputEmail}>
    <TextInput style={styles.TextIn}
   label="E-mail"
   value={email}
   textContentType="emailAddress"
   keyboardType="email-address"
   autoCapitalize="none"
   onChangeText={(u) => setEmail(u)}
    />
    </View>
    <View style={styles.ViewButton}>
     <TextInput style={styles.TextIn}
   label="Password"
   value={password}
   textContentType="password"
   secureTextEntry
   autoCapitalize="none"
   onChangeText={(p) => setPassword(p)}
    />
    </View>
    <View style={styles.ViewConfrim}>
     <TextInput style={styles.TextIn}
   label="Confirm Password"
   value={repeatedPassword}
   textContentType="password"
   secureTextEntry
   autoCapitalize="none"
   onChangeText={(r) => setRepeatedPassword(r)}
    />
    </View>
   {error && <View style={styles.errorSetting}>
        <Text style={styles.ErrorText}>{error}</Text>
    </View>}
    {!isLoading?(
    <View style={styles.ViewInput}>
    <Button style={styles.btn}
    icon="email"
          mode="contained"
          onPress={()=> onRegister(email,password,repeatedPassword)}
        >
          Register
        </Button>
        </View> ):
        ( 
            <View style={styles.Indicator}>
            <ActivityIndicator style={{}} animating={true} size={30} color={Colors.red800} />
            </View>
        )
        }
        </AccountContainer>
        <View style={styles.ViewInput}>
    <Button style={styles.btn}
          mode="contained"
          onPress={()=>navigation.navigate("Main")}
        >
            BACK
        </Button>
        </View>
    </AccountBackground>
    
    </>
        )
}
const styles = StyleSheet.create({
    btn:{
    padding:4,
    backgroundColor:'#2182BD',
    },
    errorSetting:{
    top:9,
    },
    ErrorText:{
     color:'red',
     fontSize:15,
    },
    Indicator:
    {
      top:11,
    },
   TextIn:{
       width:240,
       height:50,
   }, 
   ViewButton:{
bottom:1,
   },
   ViewConfrim:{
    top:9,
   },
   ViewInput:{
       top:20,
   },
   ViewInputEmail:{
       bottom:11,
   }
 });



 <View style={{backgroundColor:'white', padding:5}}>
            <Image style={styles.imageTwo}  /> 
            <View style={{backgroundColor:'white', width:290}}>
              <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:17,padding:5}}>title</Text>
            <Text style={{color:'transparent'}}>THIS IS DUMMY TEXT I</Text>
            <Text style={{fontSize:13, color:'#07243F'}}>time</Text>
            </View>
            <View style={{padding:5}}><Text>description</Text></View>
            </View>
            </View>