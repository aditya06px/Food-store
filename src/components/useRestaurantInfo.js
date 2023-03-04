import {useState, useEffect} from "react";

const useRestaurantInfo = ( id ) => 
{
const [restaurant,setRestaurant] = useState(null);
    //make an api call 

      useEffect(()=> {
        getRestaurantInfo();
    },[]);
    
    async function getRestaurantInfo() {
    try {
        const response = await fetch("https://www.swiggy.com/dapi/menu/v4/full?menuId="+ id);
        const json = await response.json();
        setRestaurant(json?.data);
      } catch (error) {
        console.log(error);
      }

    // }
    //return a array of data;

}
return restaurant;

}

export default useRestaurantInfo;