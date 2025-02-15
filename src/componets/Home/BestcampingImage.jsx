import React from 'react'

const BestcampingImage = (props) => {
  return (
    <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto'>
      <img src={props.image} alt="" />
    </div>
  )
}

export default BestcampingImage
