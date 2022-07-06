import React from "react";
import {ResturantScreen} from '../../features/screens/Resturants.screen';
import {RestaurantDetailScreen} from '../../features/screens/Resturants.Detail.screen';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator 
     headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={ResturantScreen}
      />
       <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};