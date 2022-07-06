import React, { useContext } from "react"
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import styled from "styled-components/native";
import {FavouriteContext } from '../../services/favourites/favourites.context';
        
const FavouriteButton = styled(TouchableOpacity)`
position: absolute;
top: 10px;
right: 10px;
z-index: 9;
`;
export const Favourite = ({restaurant}) =>{
    const {favourite,
        addFavourite,
        removeFavourite} = useContext(FavouriteContext);
        const isFavourite = favourite.find((r) => r.placeId === restaurant.placeId);
return (
    <FavouriteButton 
    onPress={() =>
      !isFavourite
        ? addFavourite(restaurant)
        : removeFavourite(restaurant)
    }>
  <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
  </FavouriteButton>    
)
}
const styles = StyleSheet.create({
  icon:{
      marginLeft:'50%',
      
  },
  });