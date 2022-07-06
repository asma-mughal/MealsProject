import 'react-native-gesture-handler';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import React, {useState,useEffect} from 'react';
import {Navigation} from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
const firebaseConfig = {
  apiKey: "AIzaSyBUBDWr_pxa9zyBxKdxhFeYeWvfJ6UVqt4",
  authDomain: "mealstogo-3ebf3.firebaseapp.com",
  projectId: "mealstogo-3ebf3",
  storageBucket: "mealstogo-3ebf3.appspot.com",
  messagingSenderId: "691489254142",
  appId: "1:691489254142:web:e5731c3b03dd68ce3113af",
};
if(!firebase.apps.length)
{firebase.initializeApp(firebaseConfig);
}


export default function App() {
  return (
    <>
    <View style={styles.container}>
      <AuthenticationContextProvider>
     <Navigation />
      </AuthenticationContextProvider>
      <ExpoStatusBar /> 
      </View>
      </>
  );
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   marginTop : StatusBar.currentHeight,
   flexDirection:'column',
   backgroundColor:'white',
  },
 
  flexContainerTwo:{
    flex:1,
    backgroundColor:'blue',
    padding:16,
  },
  text : {
   color:'white',
  },
});
