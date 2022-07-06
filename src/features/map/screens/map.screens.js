import React , {useState, useEffect, useContext} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {Search} from '../components/search.component';
import { LocationContext } from '../../../services/location/location.context';
import { ResturantContext } from '../../../services/resturants/resturants.service';
import {MapCallout} from '../components/map-callout';
export const MapScreen = ({navigation }) =>{
    const {location} =useContext(LocationContext);
    const {restaurants=[]} = useContext(ResturantContext);
    const { lat, lng, viewport } = location;
    
  const [latDelta, setLatDelta] = useState(0);

    useEffect(() => {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
  
      setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);
    return(
<>
<View style={styles.searchView}>
<Search style={styles.searchView} />
</View>
 <MapView  style={styles.mapView}
     region={{latitude:lat,
     longitude:lng,
     latitudeDelta:latDelta,
     longitudeDelta:0.02,
     }}
     >
  {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
               <MapView.Callout onPress={()=>navigation.navigate('RestaurantDetail',
                {restaurant})}>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
     </MapView>  
 </>)}
 const styles = StyleSheet.create({
    mapView :{
        height:"100%",
        width:"100%",
    },
    searchView :{
      
    },
  });