import React, { useContext, useState } from "react";
import {AccountBackground,AccountContainer,AccountCover,AccountHeading} from '../components/authentication.styles';
import { Text, View ,StyleSheet} from "react-native";
import { TextInput, Button,ActivityIndicator , Colors  } from 'react-native-paper';
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
export const LoginScreen = ({navigation}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {  onLogin,error,isLoading} = useContext(AuthenticationContext);
    return (
        <>
           <AccountBackground><AccountCover />
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
   {error && <View style={styles.errorSetting}>
        <Text style={styles.ErrorText}>{error}</Text>
    </View>}
    {!isLoading ? (
    <View style={styles.ViewInput}>
    <Button style={styles.btn}
    icon="lock-open-outline"
          mode="contained"
          onPress={()=>onLogin(email,password)}
        >
            Login
        </Button>
        </View>):(<View style={styles.Indicator}>
            <ActivityIndicator style={{}} animating={true} size={30} color={Colors.red800} />
            </View>)}
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
    TextIn:{
        width:240,
        height:50,
    }, 
    ViewButton:{
    top:5,
    },
    ViewInput:{
        top:20,
    },
    ViewInputEmail:{
        bottom:11,
    },
    Indicator:
    {
      top:9,
    }
  });
  