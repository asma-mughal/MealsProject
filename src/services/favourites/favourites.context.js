import React, {createContext, useContext, useEffect, useState} from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";
import AsyncStorage from '@react-native-async-storage/async-storage';
export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({children}) =>{
    const {  user} = useContext(AuthenticationContext);
    const [favourite, setFavourite] = useState([]);   
    const saveFavourites = async (value, uid) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
      };
    
      const loadFavourites = async (uid) => {
        try {
          const value = await AsyncStorage.getItem(`@favourites-${uid}`);
          if (value !== null) {
            setFavourites(JSON.parse(value));
          }
        } catch (e) {
          console.log("error loading", e);
        }
      };


    const add = (restaurant) => {
        setFavourite([...favourite, restaurant]);
      };
    
      const remove = (restaurant) => {
        const newFavourites = favourite.filter(
          (x) => x.placeId !== restaurant.placeId
        );
    
        setFavourite(newFavourites);
      };

      useEffect(() => {
        if (user && user.uid) {
          loadFavourites(user.uid);
        }
      }, [user]);
    
      useEffect(() => {
        if (user && user.uid && favourite.length) {
            saveFavourites(favourite, user.uid);
        }
      }, [favourite, user]);
    return(<FavouriteContext.Provider
    value={{
        favourite,
        addFavourite: add,
        removeFavourite: remove,
    }}>
        {children}
    </FavouriteContext.Provider>)
}