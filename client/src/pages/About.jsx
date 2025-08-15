import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
   <div className="mt-30 flex flex-col justify-center items-center gap-9 ">
  <h1 className='bg-black-200  text-red-300 hover:text-green-500 transition-all'>This Project Made By Shashank S</h1>
  <img
    src={assets.photo}
    alt=""
    className="max-w-130 border border-black-200 rounded cursor-pointer"
  />
</div>

  )
}

export default About
