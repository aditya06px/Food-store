import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import filterData from "../filterData";
import { searchContext } from "../searchContext";
import { useContext } from "react";

export const Title = () => {
  return (
    <a href="/" className=" flex justify-center">
      <img
        className="w-12 h-12 block"
        alt="logo"
        src="https://static.wixstatic.com/media/269b56_1232f3b1040f407a92af5c0dea32778f~mv2.png/v1/fill/w_283,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logoAsset%2022.png"
      />
    </a>
  );
};

const Header = () => {
  const cart = useSelector((store) => store.cart.items);
 
  const {searchText, setSearchText ,handleFilterChange} = useContext(searchContext);
  return (
    <nav className="bg-gray-800 text-white lg:flex lg:items-center lg:justify-between lg:px-4 lg:py-4">
      <ul className="lg:flex lg:justify-between lg:items-center lg:gap-8">
        <li>
          <Title />
        </li>
        <li className="hover:text-gray-400">
          <Link to="/">Home</Link>
        </li>
      </ul>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-700 text-white rounded-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:text-gray-800"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="ml-2 px-4 hover:text-gray-400 hover:rounded-md"
          onClick={handleFilterChange}
        >
          Search
        </button>
      </div>

      <ul className="lg:flex gap-8 lg:align-middle">
        <li className="block py-2 hover:text-gray-400 hover:rounded-md">
          <Link to="/about">About</Link>
        </li>
        <li className="block py-2 hover:text-gray-400  hover:rounded-md">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="block py-2 hover:text-gray-400 hover:rounded-md ">
          <Link to="/cart">Cart-{cart.length}</Link>
        </li>
      </ul>

      {/* <Title />
      <div className="nav-items">
        <ul className=" text-4xl text-center md:flex md:flex-row md:flex-wrap md:text-2xl lg:justify-around lg:text-xl py-4 font-xl">
          <li className=" block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]">
            <Link to="/">Home</Link>
          </li>
          <li className="block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]">
            <Link to="/about">About</Link>
          </li>
          <li className="block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="block py-2 hover:bg-rose-100 hover:px-2 hover:rounded-md md:basis-[48%] lg:basis-[23%]">
            <Link to="/cart">Cart-{cart.length}</Link>
          </li>
        </ul>
      </div> */}

      {/* {
              (isLoggedIn) ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        } */}
    </nav>
  );
};

export default Header;
