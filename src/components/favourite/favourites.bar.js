import React from "react"
import styled from "styled-components/native";
import { ScrollView ,View} from "react-native";
import {CompactResturant} from '../restaurant/CompactResturant';
const FavouriteWrapper = styled.View `
padding:20px
`
;
export const FavouriteBar = ({favourite}) =>(  //taking in the current Favourite
<FavouriteWrapper>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourite.map((restaurant)=>{
          const key = restaurant.name;
          return(
          <View key={key} style={{top:10, padding:4, height:130} }>
             <CompactResturant restaurant={restaurant} />
          </View>
        )   
     })}
    </ScrollView>
</FavouriteWrapper>
)