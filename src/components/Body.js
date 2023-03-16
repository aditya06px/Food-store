import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer";
import { useEffect } from "react";
import useIsOnline from '../utils/useOnline'
import { useDispatch, useSelector } from "react-redux";
import { setfilteredRestaurantsFirstTime } from "../utils/searchSlice";
import store from "../utils/store";
import { searchContext } from "../searchContext";
import { useContext } from "react";

const Body = () => {  

  const isOnline = useIsOnline();
  const {filteredRestaurants ,allRestaurants} = useContext(searchContext);
  return (
    <>
      {isOnline ? <>   
         {(allRestaurants.length === 0) ? <Shimer /> : 
      (<div className="flex flex-wrap justify-center max-w-screen-xl gap-8 mx-auto mt-8 pb-12">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={`restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data}  />
            </Link>
          );
        })}
      </div>) }
</>:<h1>........Loading</h1>}
    </>

  );
};

export default Body;
