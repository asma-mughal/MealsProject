import React from "react";
import { Text, View ,StyleSheet} from "react-native";
import {AccountBackground,AccountCover,AccountContainer,AccountHeading
, AnimationWrapper} from '../components/authentication.styles';
import { Button } from "react-native-paper";
import LottieView from 'lottie-react-native';
export const AccountScreen = ({navigation}) =>{
    return(<>
    <AccountBackground><AccountCover />
    <AnimationWrapper>
    <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/watermelon.json")}
        />
        </AnimationWrapper>
    <AccountHeading>Meals To Go</AccountHeading>
    <AccountContainer>
    <Button
          icon="lock-open-outline"
          mode="contained"
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
            Login
        </Button>
        <View style={styles.ViewReg}>
        <Button style={styles.btn}
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
            Regsiter
        </Button>
        </View>
    </AccountContainer>
    </AccountBackground>
    </>)
}
const styles = StyleSheet.create({
    ViewReg :{
    top:10,
    },
    btn:{
        backgroundColor:'#2182BD',
        },
  });
  