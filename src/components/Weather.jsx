import React, { useEffect, useRef, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import sun from '../assets/sun.png'
import cloudy from '../assets/cloudy.png'
import drizzle from '../assets/drizzle.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'
import humidity from '../assets/humidity.png'

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState();

  const allIcons = {
        "01d": sun,
        "01n": sun,
        "02d": cloudy,
        "02n": cloudy,
        "03d": cloudy,
        "03n": cloudy,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow,
  }

  const handleInput = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault();
      search(inputRef.current.value);
    }
  }

  const search = async (city) => {
    if(city === ""){
      alert("Enter a city name.");
      return;
    }
    else{
      try{
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;

        const res = await fetch(api_url);
        const data = await res.json();
  
        const icon = allIcons[data.weather[0].icon] || sun;

        if(!res.ok){
            alert(data.message);
            return;
        }
        console.log(data);

        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          feelsLike: Math.floor(data.main.feels_like),
          icon: icon
        })
      }
      catch (error){
        setWeatherData(false);
        console.log("Error");
      }
    }
  }

  useEffect(() => {
    search("london");
  },[]);

  return (
    <div className='flex flex-col justify-between gap-10 bg-gradient-to-b from-blue-800 to-white shadow-2xl h-[500px] w-[50%] p-10'>

      <div className='flex items-center justify-center bg-white w-[60%] mx-auto rounded-full'>
        <input type="text" placeholder='Search' className='w-full pl-4 h-10 text-[14px] outline-none bg-transparent' ref={inputRef} onKeyDown={handleInput}/>

        <IoSearch className='h-10 w-10 p-[6px] bg-[#004aad] text-white rounded-full cursor-pointer' onClick={() => {search(inputRef.current.value)}}/>
      </div>

      {weatherData?<>
        <div className='flex items-center flex-col gap-4'>
          <img src={sun} alt="" className='w-[100px] mb-2'/>
          <p className='text-4xl font-bold'>{weatherData.location}</p>
          <p className='text-4xl'>{weatherData.temperature} °C</p>
        </div>

        <div className='flex gap-8 justify-between'>
          <div className='flex items-center gap-2'>
            <img src={wind} alt="" className='w-[40px]'/>
            <div>
              <p className='text-[16px] font-semibold'>Wind Speed</p>
              <p>{weatherData.windSpeed} Km/h</p>
            </div>
          </div>

          <div className='flex items-center'>
            <div>
              <p className='text-[16px] font-semibold'>Feels Like</p>
              <p>{weatherData.feelsLike}°C</p>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <img src={humidity} alt="" className='w-[40px]'/>
            <div>
              <p className='text-[16px] font-semibold'>Humidity</p>
              <p>{weatherData.humidity} %</p>
            </div>
          </div>
        </div>
      </>:<></>}
    </div>

    
  )
}

export default Weather
