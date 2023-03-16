import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import RestauntCardInfo from "./components/RestaurantCardInfo";
import Cart from "./components/Cart";
import { searchContext } from "./searchContext";
import filterData from "./filterData";

const AppLayout = () => {
  const [searchText , setSearchText] = useState("");
  const [allRestaurants , setAllRestaurants] = useState([]);
  const [filteredRestaurants , setFilteredRestaurants] = useState([]);


  const handleFilterChange = () => {
    let data = filterData(searchText,allRestaurants);
     setFilteredRestaurants(data);
  };


  async function getRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);   
}

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <Provider store={store}>
      <searchContext.Provider value={{searchText,setSearchText,filteredRestaurants,allRestaurants,handleFilterChange}} >
      <Header />
      <Outlet />
      {/* <Footer /> */}
      </searchContext.Provider>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout  />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestauntCardInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
// ReactDOM.render(<AppLayout />, document.getElementById("root"));

{
  /* {
        Header
           - logo (Title)
           - Nav items (header)
           - Cart 
        Body
           - SearchBar
           - RestraunList
              -RestroCard
                  --tags
                  --img
                  --heading
        Footer
            -links
            -Copyright
     } */
}
