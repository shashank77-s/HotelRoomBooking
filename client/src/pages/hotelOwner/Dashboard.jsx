import React, { useState } from 'react'
import Title from '../../components/Title'
import Layout from './Layout'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashbordData,setDashboardData] =useState(dashboardDummyData)

  return (
    <div>
      <Title  title='DashBoard' subTitle='Monitor your room listings ,track bookings  and
      analyse remaove-all in one place.Stay updated with real timeinsights to enure smooth operations.' align='left' />
    
     <div className='flex gap-4 my-8 mt-15'>
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalBookingIcon} alt=""  className='max-sm:hidden h-10'/>
      
        <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashbordData.totalBookings}</p>
        </div>
     </div>

     <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalRevenueIcon} alt=""  className='max-sm:hidden h-10'/>
      
        <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-400 text-base'>{dashbordData.totalRevenue}</p>
        </div>
     </div>
 </div>
    <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
    <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
      <table className='w-full'>
        <thead className='bg-gray-50'>
          <tr>
              <th className='py-3 px-4 text-gray-600 font medium'>User Name</th>
              <th className='py-3 px-4 text-gray-600 font medium max-sm:hidden'>Room Name</th>
              <th className='py-3 px-4 text-gray-600 font medium text-center'>Total Amount</th>
              <th className='py-3 px-4 text-gray-600 font medium text-center'>Papment Status</th>
          </tr>
          
        </thead>

        <tbody className='text-sm'>
          {dashbordData.bookings.map((items,index)=>(
            <tr key={index}>
              <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                {items.user.username}
              </td>

              <td className='max-sm:hidden py-3 px-4 text-gray-700 border-t border-gray-300'>
                {items.room.roomType}
              </td>

              <td className='text-center py-3 px-4 text-gray-700 border-t border-gray-300'>
                ${items.totalPrice}
              </td>

              <td className='text-center py-3 px-4 text-gray-700 border-t border-gray-300'>
                <button className={`py-1 px-3 text-xs rounded-full mx-auto ${items.isPaid ? "bg-green-300  text-green-600": "bg-amber-200 text-yellow-600"} `}>
                  {items.isPaid ? "completed " : "pending"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   </div>
   
  )
}

export default Dashboard
