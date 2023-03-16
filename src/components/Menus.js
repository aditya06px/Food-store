import React from 'react'
import { useDispatch } from 'react-redux'
import { IMG_CDN_URL } from '../config'
import { addItem } from "../utils/cartSlice.js"


//  accept as {item}
// then we can pass like item
function Menus({item}) {
    
   const dispatch = useDispatch();

   const addToCart = (item) => {
      dispatch(addItem(item));
   }

  return (
    <div className='flex justify-between my-4'>
        <div className='basis-1/2'>
            <p>{item.name}</p>
            <p>{item.id}</p>
            <p>{item.price}</p>
            <button onClick={()=>{addToCart(item)}}>add to cart</button>
        </div>
        <div className='w-32'><img src={`${IMG_CDN_URL}/${item.cloudinaryImageId}`} /></div>
        <hr />

    </div>
  )
}

export default Menus;