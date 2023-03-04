import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer";
import { restaurantList } from "../database";
import { useState, useEffect } from "react";
// import { Router , Link } from "react-router-dom";
import { Link } from 'react-router-dom';
import useIsOnline from '../utils/useOnline'

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

//isOnline feature

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const isOnline = useIsOnline();

  async function getRestaurants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

  }

  return (
    <>
      {isOnline ? <>   <div className="flex justify-end py-4">
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ml-2 px-4 hover:bg-rose-100 hover:rounded-md"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

         {(allRestaurants.length === 0) ? <Shimer /> : 
      (<div className="flex flex-wrap justify-center max-w-screen-xl gap-8 mx-auto pb-12">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link to={`restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data}  />
            </Link>
            // <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>) }
</>:<h1>........Loading</h1>}
    </>
  );
};

export default Body;
