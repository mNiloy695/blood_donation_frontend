import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import DonationRequestForm from './pages/DonationRequestPage'
import ContactPage  from './pages/ContactPage'
import About  from './pages/About'
import Registration from './pages/Registration'
import LoginForm from './pages/Login'
import BestCamping from './pages/BestCamping'
import BlogPage from './pages/BlogPage'
import RequestFormBlood from './pages/RequestFormBlood'
import BloodCard from './pages/BloodCard'
import RequestBloodForm from './pages/Request_specific_doner_blood'
import ProfilePage from './pages/ProfilePage'
import Dashboard from './componets/Admin/AdminDashboard'
import Donors from './pages/AllDonor'
import AllBloodRequest from './pages/AllBloodRequest'
import Notification from './componets/Notification'

const App = () => {
  return (
   
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/donate' element={<DonationRequestForm/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/campaign' element={<BestCamping/>}></Route>
        <Route path='/blog' element={<BlogPage/>}></Route>
        <Route path='/request' element={<RequestFormBlood/>}></Route>
        <Route path='/doners' element={<BloodCard/>}></Route>
        <Route path='/blood/:id' element={<RequestBloodForm/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/all_donate_request' element={<Donors/>}></Route>
        <Route path='/notification' element={<Notification/>}></Route>
        
        <Route path='/all_recive_request' element={<AllBloodRequest/>}></Route>      {/* //all recive request */}
        </Routes>
  
  )
}

export default App
