import React, { useEffect, useState } from 'react'
import Navbar from '../componets/Navbar'
import BannerImage from '../assets/images/banner.png'
import HomeCard from '../componets/Home/HomeCard'
import Card from '../componets/Home/Card'
import DonationImage1  from  '../assets/images/donation1.png'
import DonationImage2  from  '../assets/images/donation2.png'
import HelpImage from '../assets/images/help1.png'
import DoctorImage from '../assets/images/doctor1.png'
import CampingImage1 from '../assets/images/camping1.png'
import CampingImage2 from '../assets/images/camping2.png'
import CampingImage3 from '../assets/images/camping2.png'
import ImageSlider from '../componets/Home/ImageSlider'
import ReviewCardSlider from '../componets/Home/ReviewCard'
import BestcampingImage from '../componets/Home/BestcampingImage'
import Image1 from  '../assets/images/image1.jpg'
import Image2 from  '../assets/images/image2.jpg'
import Image3 from  '../assets/images/image3.jpg'
import Image4 from  '../assets/images/image4.jpg'
import Image5 from  '../assets/images/image5.jpg'
import Image6 from  '../assets/images/image6.jpg'
import Contact from '../componets/Contact.jsx'
import Footer from '../componets/Footer.jsx'
import { Link, useNavigate } from 'react-router-dom'



const Home = () => {
//  const navigate =useNavigate('')
  const [token,settoken]=useState('')
  useEffect(()=>{
    if(localStorage.getItem('token') && localStorage.getItem(token) !=='undefined'){
      settoken(localStorage.getItem('token'));
    }
    
  },[])
  return (
   
   <>
   < Navbar/>
   {/* banner */}
   <ImageSlider/>
   {/* <div className="bg-cover flex items-center justify-center h-screen w-full bg-no-repeat  " style={{ backgroundImage: `url(${DonationImage1})` , filter: 'brightness(90%)',content: '' }}> 
    <h2 className='font-bold font-[Poppins]  text-white  text-center   text-4xl md:text-7xl '><span className='text-[100px]'>Y</span>our <span className='bg-red-700 p-2 rounded-md'> Blood</span> Can Bring Smile In <br />
    Any One Person Face
    </h2>
  </div> */}
  {/* registration and donation button */}
<div className='flex mt-28  p-4 justify-center gap-20 w-full  flex-col md:flex-row'>
<HomeCard  no='01.' title='Become a Donar?' text='Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but because occasionally'/>
   <HomeCard no='02.' title='Why Give Blood?' text='Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but because occasionally'/>
   <HomeCard no='03.' title='How Donations Helps' text='Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because pain, but because occasionally'/>
</div>
 {token?<div className='flex mt-20  md:flex-row flex-col m-4 font-bold justify-center text-3xl text-white '>
  <div className='p-16  mx-auto flex md:flex-row flex-col md:w-[48%] bg-red-600'>
   <Link to="request" className='flex justify-between  md:flex-row flex-col'>
   <p  >Request for Blood Now <br /><span className='font-light text-sm'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</span> </p>
   <i className="fa-solid fa-arrow-right"></i>
   </Link>
  </div>
  <div className='p-16  mx-auto flex md:flex-row flex-col  justify-center md:w-[48%] bg-slate-800'>
   <Link to="donate" className='flex justify-between md:flex-row flex-col'>
   <p  >Donate Blood Now <br />
   <span className='font-light text-sm'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</span></p>
   <i className="fa-solid fa-arrow-right"></i>
   </Link>
  </div>
</div> :
<div className='flex mt-20  md:flex-row flex-col m-4 font-bold justify-center text-3xl text-white '>
  <div className='p-16  mx-auto flex md:flex-row flex-col md:w-[48%] bg-red-600'>
   <Link to="login" className='flex justify-between  md:flex-row flex-col'>
   <p  >login Now <br /><span className='font-light text-sm'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</span> </p>
   <i className="fa-solid fa-arrow-right"></i>
   </Link>
  </div>
  <div className='p-16  mx-auto flex md:flex-row flex-col  justify-center md:w-[48%] bg-slate-800'>
   <Link to="register" className='flex justify-between md:flex-row flex-col'>
   <p  >Register Now<br />
   <span className='font-light text-sm'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</span></p>
   <i className="fa-solid fa-arrow-right"></i>
   </Link>
  </div>
</div>
}



  {/* organization section  */}
  <div className='md:m-11  flex flex-col md:flex-row  bg-[#ffff]'>
    <div className='flex p-4 w-full h-[80vh] relative'>
    <img  src={HelpImage} alt="" />
  
    <img className='w-[200px] h-[200px]  md:w-[230px] md:h-[230px] mt-20 absolute ms-[35%] flex  items-center justify-center ' src={DoctorImage} alt="" />
   
    </div>
    <div className='grid place-content-center m-2'>
      <p className='text-red-800 font-semibold text-xl m-4'> Help The People in Need</p>
      <h1 className='font-bold text-2xl m-3 md:text-6xl '>Welcome to Blood <br /> Donors Organization</h1>
      <p className='font-light font-sans m-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. suspendisse the gravida. Risus commodo viverra maecenas</p>
      <Link to="donate"><button className='px-4 py-3 m-4 font-semibold  bg-red-600'>Donate Now</button></Link>
    </div>
   
  </div>
  
  <div className='bg-red-600 p-6 mt-16 flex-wrap w-full md:p-20  text-white font-bold text-2xl flex items-center justify-center md:justify-evenly'>
    <div className='text-center '>
      <p className='text-4xl m-2'>0</p> 
      <h1>Years Of Experience</h1>  
    </div>
    <div className='text-center m-2 '>
      <p className='text-4xl m-2'>138</p> 
      <h1>Blood Donations</h1>  
    </div>
    <div className='text-center m-2'>
      <p className='text-4xl m-2'>20</p> 
      <h1>Total Awards</h1>  
    </div>
    <div className='text-center '>
      <p className='text-4xl m-2'>12</p> 
      <h1>Blood Cooperationse</h1>  
    </div>

  </div>

   {/* Befefite of donation blood */}
   <h1 className='text-center my-28 font-[Poppins] font-semibold text-4xl md:text-6xl '>Our Services</h1>
   <div className='flex mx-2  mb-40  md:mx-8 flex-wrap flex-col md:flex-row justify-center  gap-8'>
  
  <Card image={DonationImage1} title='Become a Donate' discription='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give'/>
  <Card image={DonationImage2} title='Why Give Blood' discription='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give'/>
  <Card image={BannerImage} title='How Donation Help' discription='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give'/>
  
  </div>
  {/* ALl camping  */}
  <h1 className='text-center my-28 font-[Poppins] font-semibold text-4xl md:text-6xl '>Our All Camping</h1>
   <div className='flex mx-2  mb-40  md:mx-8 flex-wrap flex-col md:flex-row justify-center  gap-8'>
    <Card image={CampingImage1} title='Blood Group Collection' discription='Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.' date='12 February 2024'/>
    <Card image={CampingImage2} title='Free Checking Blood' discription='Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.' date='20 January 2025'/>
    <Card image={CampingImage3} title='Blood  Donation camp' discription='Lorem ipsum dolor sit consectetur adipiscing elit, sed do incididunt et dolore magna aliqua.' date='20 January 2025'/>
    
   </div>
    {/* Feedback  */}

    <ReviewCardSlider/>

    {/* Camping Gallary */}

   <div className='mt-40 mb-40'>
    <h1 className='text-center mb-40 font-bold font-[Poppins] md:text-5xl text-3xl'>Our Camping Gallary</h1>
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
   <Contact/>
   <Footer/>
  </>
  )
}

export default Home
