import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './pages/hotelOwner/Layout'
import AddRoom from './pages/hotelOwner/AddRoom'
import Dashboard from './pages/hotelOwner/Dashboard'
import ListRoom from './pages/hotelOwner/ListRoom'


const App = () => {


const  isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
     {!isOwnerPath && <Navbar/>}
    {false &&  <HotelReg/>} 
     <div className='min-h-[70vh]'>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/room' element={<AllRooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>}></Route>
        <Route path='/My-Bookings' element={<MyBookings/>} />
        <Route path='/owner' element={<Layout/>} >
           <Route index element={<Dashboard/>} />
           <Route path='add-room' element={<AddRoom/>}/>
           <Route path='list-room' element={<ListRoom/>}/>
        </Route >
     </Routes>
     </div>
     {!isOwnerPath && < Footer/>}
    </div>
  )
}

export default App
 