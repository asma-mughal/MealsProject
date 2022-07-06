import React, {useContext,useEffect, useState} from 'react';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Text,View} from 'react-native';
import { List ,Avatar} from 'react-native-paper';
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
const AvatarContainer = styled.View`
  align-items: center;
  top:3;
`;
export const SettingsScreen = ({navigation}) => {
    const [photo, setPhoto] = useState(null);
    const {user, onLogout} = useContext(AuthenticationContext);
    const getProfilePicture = async() =>{
    const photoUri =await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
    } 
    useFocusEffect(()=>{
     getProfilePicture(user);
    },[user])
   return( 
  <View>
      <AvatarContainer>
      <TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
     {!photo &&<Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />}
     {photo && <Avatar.Image size={180} source={{uri:photo}} backgroundColor="#2182BD" />}
      </TouchableOpacity>
      <View style={{top:9}}>
          <Text>{user.email}</Text>
      </View>
      </AvatarContainer>
      <List.Section>
      <List.Item
          style={{padding:16}} 
          title="Favourites"
          left={(props)=><List.Icon {...props} color="black" icon="heart" />}
          description="View your Favourites"
          onPress={() => navigation.navigate("Favourites")} /> 
          <List.Item 
          style={{padding:16}}
          title="Range"
          left={(props)=><List.Icon {...props} color="black" icon="location" />}
          description="Set your Range for searching for restaurants"
          onPress={
              ()=>navigation.navigate("Ranges")
          }
          />
          <List.Item
          style={{padding:16}} 
          title="Logout"
          left={(props)=><List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout} />
      </List.Section>
  </View> 
  )
  };
  