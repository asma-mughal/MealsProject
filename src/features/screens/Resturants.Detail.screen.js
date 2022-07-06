import React,{useState} from 'react';
import { ResturantInfoCard} from '../resturanats/components/resturants-info-card';
import {View,  SafeAreaView, ScrollView,  StyleSheet,Text, FlatList} from 'react-native';
import {List} from 'react-native-paper';
export const RestaurantDetailScreen = ({route}) =>{
    const {resturant} = route.params; //pass information around
    const [breakfastExpanded, setbreakfastExpanded]= useState(false);
    const [lunchExpanded, setlunchExpanded]= useState(false);
    const [dinnerExpanded, setdinnerExpanded]= useState(false);
    const [drinksExpanded, setdrinksExpanded]= useState(false);
return (
     <>
    <ResturantInfoCard resturant={resturant} />
    <ScrollView>
        <List.Accordion
     title="breakfast" left={ (props)=><List.Icon {...props} icon="bread-slice" 
     expanded={breakfastExpanded} onPress={()=>setbreakfastExpanded(!breakfastExpanded)} />}
     >
       <List.Item title="Egg Benedict" />
         <List.Item title="Classic Breakfast" /></List.Accordion>
    <List.Accordion title="Lunch"
    left ={(props)=><List.Icon {...props} icon="hamburger" />}
    expanded={lunchExpanded}
    onPress={()=>{setlunchExpanded(!lunchExpanded)}}
     >
        <List.Item title="Pasta" />
         <List.Item title="Sandwich" />
       </List.Accordion>

    <List.Accordion title="Dinner"
    left ={(props)=><List.Icon {...props} icon="food-variant" />}
    expanded={dinnerExpanded}
    onPress={()=>{setdinnerExpanded(!dinnerExpanded)}}
     >
      <List.Item title="Burger" />
         <List.Item title="Donuts" />
    </List.Accordion>
    <List.Accordion title="Drinks"
    left ={(props)=><List.Icon {...props} icon="cup" />}
    expanded={drinksExpanded}
    onPress={()=>{setdrinksExpanded(!drinksExpanded)}}
     >
      <List.Item title="Mint " />
         <List.Item title="Simple Juice" />
    </List.Accordion>
    </ScrollView>
    </>
)
}
const styles = StyleSheet.create({

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },

});