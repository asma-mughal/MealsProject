import React, { useContext } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";
import {MapScreen} from '../../features/map/screens/map.screens';
import { RestaurantsNavigator } from "./restaurant.navigator";
import { AuthenticationContext} from '../../services/authentication/authentication.context';
import { FavouriteContextProvider } from "../../services/favourites/favourites.context";
import { ResturantContextProvider } from "../../services/resturants/resturants.service";
import { LocationContextProvider } from "../../services/location/location.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";
import {SettingNavigator} from './account/settings.navigator';
const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};


const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouriteContextProvider>
  <LocationContextProvider>
<ResturantContextProvider>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingNavigator} />
    </Tab.Navigator>
    </ResturantContextProvider>
      </LocationContextProvider>
      </FavouriteContextProvider>
);