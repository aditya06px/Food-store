import React from 'react'
import { IMG_CDN_URL } from '../config'

function Menus({name,id,price,cloudinaryImageId}) {
  return (
    <div className='flex justify-between my-4'>
        <div className='basis-1/2'>
            <p>{name}</p>
            <p>{id}</p>
            <p>{price}</p>
            <button>add to cart</button>
        </div>
        <div className='w-32'><img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} /></div>
        <hr />

    </div>
  )
}

export default Menus