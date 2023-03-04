import React from 'react'

function Shimer() {
  return (
  <div className='flex flex-wrap justify-center max-w-screen-xl gap-8 mx-auto pb-12'>

  {Array(10).fill("").map((element,index)=> {
    return (
    <div className='w-[30%] h-72 rounded bg-slate-400' key={index} ></div>)
  })}

  </div>

  )
}

export default Shimer