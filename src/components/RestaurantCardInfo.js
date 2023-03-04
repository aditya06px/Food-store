import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimer from "./Shimer";
import Menus from "./Menus"
import useRestaurantInfo from "./useRestaurantInfo";


// https://www.swiggy.com/dapi/menu/v4/full?menuId=448817

//  json.data.area
//  json.data.city
//  json.data.menu.items
const RestauntCardInfo = () => {
    
    const { id } = useParams();
    const restaurant = useRestaurantInfo(id);

    if(restaurant) {

        console.log(Object.values(restaurant?.menu?.items))
    }
    

    return  !restaurant ? <Shimer /> : (
        <div className="max-w-4xl mx-auto">
        <div className="flex ">
            <div className="order-2 ml-8">
                <h1 className="mt-4">{restaurant?.name} : {id}</h1>
                <h3>{restaurant?.city}</h3>
                <h1> {id}</h1>
            </div>
            <div><img src={`${IMG_CDN_URL}/${restaurant?.cloudinaryImageId}`} /></div>
        </div>


        <div className="max-w-4xl mx-auto">
            {
                Object.values(restaurant?.menu?.items).map((item)=> {
                   return ( <Menus {...item} key={item.id}  />)
                })
            }
        </div>
        
        </div>
    )
}


/*
  name 
  city
  menu.items 
    category 
    description
    cloudinaryImageId
    isVeg => 1
    price
*/
export default RestauntCardInfo;