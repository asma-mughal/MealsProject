import React from 'react';
import { SvgXml } from 'react-native-svg';
import { StyleSheet, Text,View, Image } from 'react-native';
import { Card} from 'react-native-paper';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Favourite } from '../../../components/favourite/favourite.component';
export const ResturantInfoCard = ({resturant={}}) =>{ //resturant is an object with some proporties
    const {
        name = 'Some Resturant',
    photos=['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'], 
    icon='https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
     isClosed=true,
     address ='100 some random street',
      ratings=4,
       isOpenNow=true,
       placeId
    } = resturant;
       const ratingArray = Array.from(new Array(Math.floor(ratings)));
return(
<View>
   <Card elevation={5} style={styles.card}>
       <Card.Content>
           <View style={styles.icon}>
       <Favourite restaurant={resturant} />
       </View>
         <Card.Cover source={{ uri: photos[0] }} >
         </Card.Cover>
       
     <Text style={styles.text}>{name}</Text>
     <View style={styles.starRow}>
     {ratingArray.map((key) =>
     <>
     <SvgXml key={`star-${placeId}-${key}`} xml={star} height={20} width={20} />    
     </>
     )}
   <View style={styles.open}>
       {isClosed && <Text style={styles.closeText}>CLOSED TEMPORARILY</Text> }
       {isOpenNow && <SvgXml xml={open} style={styles.close} />}
       <View  style={styles.SpaceView} />
       <Image  style={styles.image} source={{uri:icon}} />
       </View></View>  
     <Text style={styles.textAddress}>{address}</Text>
       </Card.Content>
   </Card>
</View>)
}

const styles = StyleSheet.create({
    close : {
    height:15,
    width:15,
    },
    closeText:{
    paddingRight:10,
    color:'red',
    },
    card:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
            
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        marginBottom:20,
        elevation: 6,
        color:'white',
    },
    image:{
      width:15,
      height:15,
    },
    icon:{
    marginLeft:'80%',
    },
    starRow:{
       flexDirection:'row',
       paddingTop:2,
       paddingBottom:3,
    },
    SpaceView:{
        padding:4 , 
        marginLeft:5,
    },
   text:{
    padding:5,
    marginTop:15,
    fontSize:20,
   },
   textAddress:{
    fontSize:15,
    paddingLeft:5,
   },
   open:{
    justifyContent:'flex-end',
    flex:1,
    flexDirection:'row',
   },
  });