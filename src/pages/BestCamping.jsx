import React from 'react'
import Navbar from '../componets/Navbar'
import BestcampingImage from '../componets/Home/BestcampingImage'
import Footer from '../componets/Footer'
import Image1 from  '../assets/images/image1.jpg'
import Image2 from  '../assets/images/image2.jpg'
import Image3 from  '../assets/images/image3.jpg'
import Image4 from  '../assets/images/image4.jpg'
import Image5 from  '../assets/images/image5.jpg'
import Image6 from  '../assets/images/image6.jpg'
import Contact from '../componets/Contact.jsx'
import CampingImage1 from '../assets/images/camping1.png'
import CampingImage2 from '../assets/images/camping1.png'
import CampingImage3 from '../assets/images/camping2.png'

import Card from '../componets/Home/Card'

const BestCamping = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-center my-6 font-[Poppins] font-semibold text-3xl md:text-4xl '>Our All Camping</h1>
   <div className='flex mx-2  mb-40  md:mx-8 flex-wrap flex-col md:flex-row justify-center  gap-8'>
    <Card image={CampingImage1} title='Blood Group Collection' discription='Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.' date='12 February 2024'/>
    <Card image={CampingImage2} title='Free Checking Blood' discription='Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.' date='20 January 2025'/>
    <Card image={CampingImage3} title='Blood  Donation camp' discription='Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.' date='20 January 2025'/>
    
   </div>


   <div className='my-20'>
   <Contact/>
   </div>
    {/* Feedback  */}

    <div className='my-6 mb-40'>
    <h1 className='text-center mb-40 font-bold font-[Poppins] md:text-4xl text-2xl'>Our Camping Gallary</h1>
   <div className='flex my-4 justify-center flex-col md:flex-row flex-wrap gap-11'>
    <BestcampingImage image={Image1}/>
    <BestcampingImage image={Image2}/>
    <BestcampingImage image={Image3}/>
   </div>
   <div className='flex m-4 justify-center gap-11 flex-col md:flex-row flex-wrap'>
   <BestcampingImage image={Image4}/>
    <BestcampingImage image={Image5}/>
    <BestcampingImage image={Image6}/>
   </div>
   </div>
  
    <Footer/>
    </>

  )
}

export default BestCamping
