import React from 'react';
import {Text, StyleSheet, View,Image} from 'react-native';
import WebView from "react-native-webview";
import styled from "styled-components/native";
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 150px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndriod = Platform.OS==="android";
export const CompactResturant = ({restaurant, isMap}) =>{
    const Image = (isAndriod && isMap) ?CompactWebview : CompactImage;
    return(<>
    <View style={styles.CompactWebview}>
    <Image source={{ uri: restaurant.photos[0] }} />
    <Text center variant="caption" numberOfLines={3}>
      {restaurant.name}
    </Text> 
    </View> 
    </>)
}
const styles = StyleSheet.create({
    compactImage:{
        borderRadius : 10,
        width:120,
        height:130,
    }, 
    CompactWebview:{
    },
    Item : {
     padding:'10px',
     alignItems:'center',
    },
  });

 