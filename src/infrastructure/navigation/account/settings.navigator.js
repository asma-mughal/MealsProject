import React from "react";
import {View,Text} from 'react-native';
import {createStackNavigator,   CardStyleInterpolators,} from '@react-navigation/stack';
import { SettingsScreen } from "../../../features/settings/screens/settings.screens";
import {FavouriteScreen} from '../../../features/settings/screens/favourite.screen';
import { CameraScreen } from "../../../features/settings/screens/camera.screen";
const SettingsStack = createStackNavigator();
export const SettingNavigator = ({route,navigation}) =>{
    return(
        <SettingsStack.Navigator 
        headermode="screens">
         <SettingsStack.Screen  options={{header:()=>null,}}
         name="Settings" component={SettingsScreen} />
         <SettingsStack.Screen name="Favourites" component={FavouriteScreen} />
         <SettingsStack.Screen name="Ranges" component={()=>null} />
         <SettingsStack.Screen name="Camera" component={CameraScreen} />
        </SettingsStack.Navigator>
    )
} 