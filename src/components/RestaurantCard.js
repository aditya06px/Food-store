// import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {IMG_CDN_URL} from "../config"


const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    avgRating,
  }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={`${IMG_CDN_URL}/${cloudinaryImageId}`}  />
     
      <div className="px-4 py-2">
        <h3 className="font-bold text-lg mb-1">{name}</h3>
        {/* <h3>{cuisines.join(", ")}</h3> */}
        <p className="text-gray-700 text-sm mb-2">{avgRating} stars</p>
      </div>
    </div>
  );
};

export default RestaurantCard;