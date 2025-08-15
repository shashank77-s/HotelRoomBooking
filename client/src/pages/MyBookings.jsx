import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {

const [bookings,setBookings]=useState(userBookingsDummyData)

  return (
    <div className='py-28 px-4 md:px-16 lg:px-24 xl-px24'>
      <Title title='My bookings'  subTitle='Easily manage your past ,currnt and upcoming hotel reservations
      in one place .plan your trips seamlessly with just a few clicks' align='left' />

    <div className='   max-w-6xl mt-8 w-full text-gray-800'> 
        <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
            <div className='w-1/3'>Hotel</div>
            <div className='w-1/3'>Date and Timings</div>
            <div className='w-1/3'>Payment</div>
        </div>

        {bookings.map((booking)=>(
            <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                <div>
                <div>
                    <img src={booking.room.images[0]} alt="" className='min-md:w-44 rounded shadow object-cover'/>
                </div>
                <div className='flex flex-col gap-0.5 max-md:mt-3 min-md:ml-4'>
                    <p className='font-playfair text-2xl'> {booking.hotel.name}</p>
                    <span className='font-inter text-sm m-t-2'>{booking.room.roomType}</span>
                </div>
                <div className='flex items-center gap-1 text-sm text-gray-500'>
                    <img src={assets.locationIcon} alt="" />
                    <span>{booking.hotel.address}</span>
                </div>
                 <div className='flex items-center gap-1 text-sm text-gray-500'>
                    <img src={assets.guestsIcon} alt="" />
                    <span>Guests: {booking.guests}</span>
                </div>
                <p>Total : ${booking.totalPrice}</p>
                </div>
                <div className='flex gap-5 mt-20 mr-5'>
                    <div>
                        <p>Check-In:</p>
                        <p>{new Date(booking.checkInDate).toDateString()}</p>
                    </div>
                    <div>
                        <p>Check-In:</p>
                        <p>{new Date(booking.checkInDate).toDateString()}</p>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center pt-3'>
                    <div className='flex items-center gap-2'>
                        <div className={`h-3 w-3 rounded-full ${booking.isPaid ? "bg-green-500" : "bg-red-500"}`}></div>
                        <p className={ `text-sm ${booking.isPaid ? "text-green-500" : "text-red-500"}`}>{booking.isPaid ? "Paid" : "Unpaid"}</p>
                    </div>
                    {booking.isPaid ? <></> : <button className='px-4 py-1.5 mt-4 text-xs border border-gry-400 rounded-full
                    hover:bg-gray-100 transition-all cursor-pointer'> Pay Now</button>}

                </div>
            </div>
            
        ))}


    </div>

    </div>
  )
}

export default MyBookings
