import React, {createContext, useContext, useEffect, useState} from 'react';
import { LocationContext } from '../location/location.context';
import { restaurantsRequest, resturantsTransform } from './resturants.context';
export const ResturantContext = createContext();
export const ResturantContextProvider = ({children}) =>{
    const [restaurant,  setRestaurants] = useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError] = useState(null);
   const {location}= useContext(LocationContext);
   const retrieveRestaurants = () => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest()
        .then(resturantsTransform )
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
    useEffect(()=>{
      if(location){
      const locationString= `${location.lat} ,${location.lng}`;
      console.log(locationString + "LocationString");//It will tell you about all locations coming.
      retrieveRestaurants(locationString);
      
      }
    },[location])
    console.log(restaurant); //It will tell you about all resturants coming.
    return( 
        <ResturantContext.Provider value={{
            restaurants:restaurant,
            isLoading,
            error,
        }}>

        
{children}
</ResturantContext.Provider>
    )
}