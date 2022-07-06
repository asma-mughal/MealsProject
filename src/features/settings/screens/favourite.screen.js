import React, { useContext } from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { FavouriteContext } from '../../../services/favourites/favourites.context';
import {RestaurantList} from '../../../features/resturanats/components/restaurant.list.styles';
import { ResturantContext } from '../../../services/resturants/resturants.service';
import { ResturantInfoCard } from '../../resturanats/components/resturants-info-card';
export const FavouriteScreen = ({navigation}) =>{
    const {  favourite}= useContext(FavouriteContext);
    //const {restaurants} = useContext(ResturantContext);
    return favourite.length?(<View>
        <RestaurantList
         data={
            favourite
        }
        renderItem={({item})=>{
           return(
             <TouchableOpacity onPress={()=>
             navigation.navigate("RestaurantDetail", { resturant:item}  )
             }>
           <ResturantInfoCard 
           resturant={item} />
           </TouchableOpacity>
           )}}
           keyExtractor={(item) => item.name}
          contentContainerStyle={styles.contentCont}
          > 
        </RestaurantList>
    </View>)
    :(<View style={styles.container}><Text>No Favourites Yet</Text></View>)
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
  });