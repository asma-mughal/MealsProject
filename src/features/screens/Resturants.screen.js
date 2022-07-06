import React , {useContext,useState} from 'react';
import {StyleSheet, View, FlatList,TouchableOpacity } from 'react-native';
import {ResturantInfoCard} from '../resturanats/components/resturants-info-card';
import { ResturantContext } from '../../services/resturants/resturants.service';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from '../resturanats/components/search.component';
import {FavouriteContext} from '../../services/favourites/favourites.context';
import { FavouriteBar } from '../../components/favourite/favourites.bar';
import {FadeInView} from '../../animations/fade.animation';
export const ResturantScreen = ({navigation}) =>{
  //const restaurantContext = useContext(ResturantContext);
  const {restaurants,isLoading, Error} = useContext(ResturantContext);
  const [isToggled,setIsToggled]= useState(false);
  const {favourite} = useContext(FavouriteContext);
return(
    <>
<View style={styles.flexContainer}> 
{isLoading && 
<View style={styles.containerActivity}>
  <ActivityIndicator style={{}} animating={true} size={30} color={Colors.red800} />
  </View>}  
        <Search  
        isFavouriteToggle={isToggled}
        onFavouriteToggle={()=>setIsToggled(!isToggled)} />
      </View> 
      {isToggled && <FavouriteBar favourite={favourite} /> }     
      <FlatList
         data={
          restaurants
        }
        renderItem={({item})=>{
           return(
             <TouchableOpacity onPress={()=>
             navigation.navigate("RestaurantDetail", { resturant:item}  )
             }>
             <FadeInView>
           <ResturantInfoCard 
           resturant={item} />
           </FadeInView>
           </TouchableOpacity>
           )}}
           keyExtractor={(item) => item.name}
          contentContainerStyle={styles.contentCont}
          />
 
         
    <View style={styles.flexContainerTwo}>   
    </View>
    </>
);
}
const styles = StyleSheet.create({
  contentCont:{
   padding:16,
  },
  containerActivity:{
   top:"200%",
   left:"50%",
   position:'absolute',
   justifyContent:'center',
   alignItems:'center',
   alignContent:'center',

  },
    flexContainer : {

       padding:16,
      }, 
    flexContainerTwo:{
      flex:1,
      backgroundColor:'#EFEFEF',
      padding:16,
    },
    
  });