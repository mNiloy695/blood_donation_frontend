import React from 'react'

const Card = (props) => {
  return (
    <div className='w-[275px] sm:w-[400px] mx-auto  text-center p-8 sm:p-6 h-[480px] shadow-lg bg-[#ffff]'>
      <div>
      <img  className='w-[100%] h-[150px] sm:h-[200px]' src={props.image} alt="donation image 1" />
      </div>
      <h1 className='text-2xl font-bold m-4'>{props.title}</h1>
      <h1 className='text-sm font-black font-mono'> {props.date ? (
          <>
            <i className="fa-solid fa-calendar-days" style={{ color: 'red' }}></i> {props.date}
          </>
        ) : null}</h1>
      <p className='mt-2 font-light'>{props.discription}</p>
      <button className='m-6 font-semibold'><a href="./donate" className='px-8  py-2 rounded-md bg-red-600'>Donate Now</a></button>
    </div>
  )
}

export default Card
