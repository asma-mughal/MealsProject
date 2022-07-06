import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
export const CameraScreen = () =>{
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const {user} = useContext(AuthenticationContext);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const snap = async () => {
      let photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      console.log(photo);

  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
    return (
      <View style={styles.container}>
      <Camera 
      ref={(camera)=>(cameraRef.current = camera)}  style={styles.Camera} 
      type={Camera.Constants.Type.front}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={snap}>
            <Text style={styles.text}>TAKE A PICTURE </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
    )
}
const styles = StyleSheet.create({ 
  Camera:{
    height:'100%',
  },
  text:{
   color:'white',
  },
  button:{
    backgroundColor:'black',
  }
 });