import React from 'react'
import { IoSearch } from "react-icons/io5";
import sun from '../assets/sun.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'

const Weather = () => {
  return (
    <div className='flex flex-col justify-between gap-10 bg-gradient-to-b from-blue-800 to-white shadow-2xl h-[500px] w-[50%] p-10'>

      <div className='flex items-center justify-center bg-white w-[60%] mx-auto rounded-full'>
        <input type="text" placeholder='Search' className='w-full pl-4 h-10 text-[14px] outline-none bg-transparent'/>

        <IoSearch className='h-10 w-10 p-[6px] bg-[#004aad] text-white rounded-full cursor-pointer'/>
      </div>

      <div className='flex items-center flex-col gap-4'>
        <img src={sun} alt="" className='w-[100px] mb-2'/>
        <p className='text-4xl font-bold'>New York</p>
        <p className='text-4xl'>23°C</p>
      </div>

      <div className='flex gap-8 justify-between'>
        <div className='flex items-center gap-2'>
          <img src={wind} alt="" className='w-[40px]'/>
          <div>
            <p className='text-[16px] font-semibold'>Wind Speed</p>
            <p>3.5 Km/h</p>
          </div>
        </div>

        <div className='flex items-center'>
          <div>
            <p className='text-[16px] font-semibold'>Feels Like</p>
            <p>20°C</p>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <img src={humidity} alt="" className='w-[40px]'/>
          <div>
            <p className='text-[16px] font-semibold'>Humidity</p>
            <p>90%</p>
          </div>
        </div>
      </div>

    </div>

    
  )
}

export default Weather
