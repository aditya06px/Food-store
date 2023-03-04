import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./utils/store"

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from './components/Contact';
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import RestauntCardInfo from "./components/RestaurantCardInfo";


const AppLayout = () => {
  return (
     <Provider store={store}>
    <Header />
    <Outlet />
    <Footer />
     </Provider>
  )

}


const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />
      }
      ,{
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestauntCardInfo />

      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />)
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
