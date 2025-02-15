import React from 'react'

const HomeCard = (props) => {

  return (
    <div className='p-2  mx-auto w-[270px]  h-[380px] m-1 shadow-sm bg-white text-[#545454]'>
      <h1 className='text-2xl font-bold  text-black'>{props.no}</h1>
      <h1 className='text-2xl font-bold pt-4 pb-4 text-black'>_________{props.title}</h1>
      <p>
     {props.text}
      </p>
    </div>
  )
}

export default HomeCard
