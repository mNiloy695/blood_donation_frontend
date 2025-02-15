import React from 'react'
import Profile from '../componets/Profile'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Contact from '../componets/Contact'
import BloodRequestsTable from '../componets/BloodRequestTableByGroup'
import MyBloodRequestsTable from '../componets/MyBloodRequestTable'
import MyDonation from '../componets/MyDonation'


const ProfilePage = () => {
  return (
  <>
  <Navbar/>
  <div className='flex justify-between flex-col md:flex-row'>
  <Profile/>
  <BloodRequestsTable/>
  </div>
  <div className='flex justify-between flex-col md:flex-row'>
  <MyBloodRequestsTable/>
  <MyDonation/>
  </div>
 
  <Footer/>
  </>
  )
}

export default ProfilePage
