import { useState} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Title = () => {

    return (
      <a href="/" className=" flex bg-rose-100 py-10 justify-center">
        <img
          className="w-40 block"
          alt="logo"
          src="https://static.wixstatic.com/media/269b56_1232f3b1040f407a92af5c0dea32778f~mv2.png/v1/fill/w_283,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logoAsset%2022.png"
        />
      </a>
    );
  };
  
const Header = () => {

  const cart = useSelector(store=> store.cart.items);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
      <div className="header ">
        <Title />
        <div className="nav-items">
          <ul className=" text-4xl text-center md:flex md:flex-row md:flex-wrap md:text-2xl lg:justify-around lg:text-xl py-4 font-xl">
            <li className=" block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]"><Link to="/">Home</Link></li>
            <li className="block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]"><Link to="/about">About</Link></li>
            <li className="block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]"><Link to="/contact">Contact</Link></li>
            <li className="block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]">Cart-{cart.length}</li>
          </ul>
        </div>

        {/* {
              (isLoggedIn) ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        } */}
      </div>
    );
  };

export default Header;  