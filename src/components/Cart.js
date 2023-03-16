import { useSelector } from "react-redux";
import Menus from "./Menus.js";
import { IMG_CDN_URL } from "../config";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const EmptyCart = () => {
  return (
    <div>
      <h1>cart is empty</h1>
    </div>
  );
};

const NotEmpty = () => {
  return (
    <div>
      <h1>not empty</h1>
    </div>
  );
};

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  function handleClick() {
            dispatch(clearCart());
  }

  return (
    <div className="flex flex-col align-middle">
      <h1>cart</h1>
      <button onClick={()=> handleClick()}> Empty the cart </button>
      {!cart.length ? (
        <EmptyCart />
      ) : (
        cart.map((item) => {
          return (
            <div key={item.id} className="flex justify-between my-4 mx-auto w-3/4 ">
              <div className="basis-1/2">
                <p>{item.name}</p>
                <p>{item.id}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>
              <div className="w-32">
                <img src={`${IMG_CDN_URL}/${item.cloudinaryImageId}`} />
              </div>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
