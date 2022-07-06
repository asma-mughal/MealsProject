import {mockImages, mocks} from './mock';
import camelize from 'camelize';
export const restaurantsRequest = (location="37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
      const mock = mocks[location];
      if (!mock) {
        reject("no Resturants  found");
      }
      resolve(mock);
    });
  };
export  const resturantsTransform = ({ results=[] }) =>{
      const mappedResults = results.map((restaurant)=>{
        restaurant.photos=restaurant.photos.map((p)=>{
         // return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
         return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        }) ;
        return {
          
            ...restaurant,
            address : restaurant.vicinity,
            isOpenNow : restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosed: restaurant.business_status ==='CLOSED TEMPORARILY',
        };
    });
     
      return camelize(mappedResults);
  }
 /* restaurantsRequest().then(resturantsTransform).then((transformRest)=>{
  console.log(transformRest);
  })
  .catch((err)=>console.log("error  "));*/