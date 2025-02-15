import React from 'react'
import Navbar from '../componets/Navbar'
import AboutImage from '../assets/images/aboutImage.png'
import Footer from '../componets/Footer'
import { Link } from 'react-router-dom';
const About = () => {
  return (
   <>
   <Navbar/>
   {/* banner */}
   <div className='flex flex-col  md:flex-row   p-6 gap-11 justify-center md:justify-between m-12'>
      <div className='md:p-8 w-[60%]'>
        <h1 className='text-black font-bold text-xl flex items-center md:text-6xl'>Who We Are</h1>
        <h2 className='my-3 text-black font-bold text-xl sm:text-2xl'>We are here not for income, but for outcome</h2>
        <p className='text-[#545454] my-8 flex justify-center'>Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when untrammelled and when nothing prevents</p>
        <Link to='/about'>
        <button className='px-10 md:px-20 py-4 md:py-5 rounded-md bg-red-600 md:text-xl font-semibold'>Explore</button>
        </Link>
      </div>
      
        <div className='flex justify-center items-center'>
        <img className='w-[100%]' src={AboutImage} alt="about image" />
        </div>
      
  </div>

  {/* footer */}
  <Footer/>
   </>
  )
}

export default About
