import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'

const RoomDetails = () => {

  const {id}=useParams()
  const[room , setRoom]=useState(null)
  const[mainImage, setMainImage]=useState(null)


  useEffect(()=>{
   const room= roomsDummyData.find(room => room._id=== id)
   room && setRoom(room)
   room && setMainImage(room.images[0])
  },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
       <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}
          <span className='font-inter text-sm'>({room.roomType})</span></h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500
        rounded full'>20% OFF</p>
       </div>
      <div className='flex items-center gap-1 mt-2'>
        <p className='ml-2'>200+ reviews</p>
      </div>


      <div className='flex items-center gap-2 text-gray-500 mt-3'>
        <img src={assets.locationIcon} alt="" />
        <span>{room.hotel.address}</span>
      </div>


      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="" className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room ?.images.length >1 && room.images.map((image,index)=>(
            <img onClick={()=> setMainImage(image)}
             src={image} key={index}  className={`w-full rounded-xl shadow-md object-cover 
              cursor-pointer ${ mainImage === image && 'outline-3 outline-orange-200'}`}/>
          ))}
        </div>
      </div>

{ /* Room Highlights */}
        <div className='flex flex-col md:lex-row md:justify-between mt-10'>
            <h1 className='text-3xl md:text-4xl font-playfair'>Expierence Luxury Like Never Before</h1>
            <div className='flex flex-wrap items-center mt-4 mb-3 gap-4 '>
              {room.amenities.map((item,index)=>(
                <div key={index} className='flex  items-center gap-2 px-3 py-2 rounded-lg
                bg-gray-100'>
                  <img src={facilityIcons[item]} alt="" className='w-5 
                   h-5'/>
                   <p className='text-xs'>{item}</p>
                </div>
              ))}
            </div>
            <p className='text-'>$ {room.pricePerNight}/Night</p>
        </div>

         <form className='flex flex-col md:flex-row items-start md:items-center justify-between
         bg-white shadow-[0px_0px_20px_rgba(00,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl '>

            <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

<div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
               <div className='flex flex-col'>
                <label htmlFor="checkInDate" className='font-medium'>checkIn</label>
                <input type="date"  id='checkInDate' placeholder='Check-In' className='
                w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required/>
               </div>

              <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
               <div className='flex flex-col'>
                <label htmlFor="checkOutDate" className='font-medium'>checkOut</label>
                <input type="date"  id='checkOutDate' placeholder='Check-Out' className='
                w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required/>
               </div>
              <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                <div className='flex flex-col'>
                <label htmlFor="guests" className='font-medium'>Guests</label>
                <input type="number"  id='guests' placeholder='0' className='
               rounded max-w-20 border border-gray-300 px-3  px-3 py-2 mt-1.5 outline-none' required/>
               </div>

             </div>

              <button type='submit' className='bg-primary hover:bg-primary-dull
                active:scale-95 transition-all text-white rounded-md max-md:w-ful
                max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                  Check Availability
                </button>
         </form>


         <div className='mt-25 space-y-4'>
          {roomCommonData.map((spec,index)=>(
              <div key={index} className='flex items-start gap-2'>
                <img src={spec.icon} alt="" className='w-6.5 '/>
                <div>
                  <p className='text-base'>{spec.title}</p>
                  <p className='text-gray-500'>{spec.description}</p>
                </div>
              </div>
          ))}
         </div>

<div>
  <p className='max-w-3xl border-y border-gray-300 mt-15 py-10 text-gray-500'>Guests will be allcated on the ground
    floor accordingly to availability you get a comfatable two bedroom apartment has a true city feeling.
    the price quoted is for two guests.</p>
</div>

<div className='flexvflex-col items-start gap-4'>
          <img src={room.hotel.owner.image} alt="" />
          <div>
            <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
          </div>
</div>
<button className='px-6 py-2.5 mt-4 rounded text-white  bg-primary hover:bg-primary-dull transition-all
cursor-pointer'>
  Contact Now
</button>


    </div>
  )
}

export default RoomDetails