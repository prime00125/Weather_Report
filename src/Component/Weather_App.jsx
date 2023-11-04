import React,{ useState } from 'react'
import clear from '../asset/clear.png'
import cloud from '../asset/cloud.png'
import drizzle from '../asset/drizzle.png'
import humidity from '../asset/humidity.png'
import rain from '../asset/rain.png'
import snow from '../asset/snow.png'
import wind from '../asset/wind.png'
import search from '../asset/search.png'
import '../Component/Weather.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import AuthDetails from '../Component/AuthDetails'
import {  toast } from 'react-toastify';

 const Weather_App = () => {

const [wimg,setWimg] = useState('');

    let api = "3eed7f15054c7a68962a504524b9beaf";



     const  SearchFunc = async () => { 
      try{
        let element = document.querySelector('.inputField');
        if(element.value === '')
        {
          toast.warning('Please enter a city or state')
         return 0
        }
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=metric&appid=${api}`;
         console.log(element.value)
         let response = await fetch(url);
         let data = await response.json();
         
   
         const wind = document.querySelector('#wind_rate');
         const humidity = document.querySelector('#humidity');
         const location = document.querySelector('#location');
         const temperature = document.querySelector('#temperature');
            if(data.wind.speed === '')
             wind.innerHTML='';
            else 
            wind.innerHTML =  data.wind.speed +' km/h ';

          humidity.innerHTML = data.main.humidity + ' %';
          location.innerHTML = data.name;
          temperature.innerHTML = data.main.temp  + '&#8451 ';
          let img = document.querySelector('.wimg');
         
            setWimg(data.weather[0].icon)
        }
        catch(error){
          toast.error('Please give a valid city or state name')
        }
         
        
    }
    
















  return (
    <>
    <div className='Container'>
        <div className='col'>
            <div className='Search'>
                <input type="search" className='inputField' placeholder='Search'/>
                    <div className='btnSearch' onClick={() => {SearchFunc()}}>
                        <img src={search} alt='search'style={{width:'20px', height:'25px'}} className='wimg'/>
                    </div>
            </div>
            <div className='col'>

              {wimg === ''?( 
                <img src={clear } alt="WheatherImage" className='imageBox'/>):(
                  <img src={`https://openweathermap.org/img/wn/${wimg}.png` } alt="WheatherImage" className='imageBox'/>
      

              )}
            
            </div>


{/* TEXT */}
            
                <div className='col'>
                    <h3 className='number' id="temperature">15<sup>o</sup>C</h3>
                  
                </div>
                <div className='col'>
                        <p className='text' id='location'>Wakanda</p>
                    </div>
                 

{/* Waves */}
                <div className='col'>
                   <div className='humidityBox'>
                    <section className='box'>
                    <img src={humidity} alt="Humidity" style={{width:'30px', height:"30px"}}className='humidity'/>
                    <p id='humidity'> </p>
                    </section >
                      <h4>humidity</h4>
                   </div> 

                   <div className='windBox'>

                    <section className='box'>
                    <img src={wind} alt="Wind" className='wind' style={{width:'30px', height:"30px"}}/>
                    <p id= 'wind_rate'> </p>
                    </section>
                    <h4>Wind Speed</h4>
                
                   </div>
                </div>
        

        </div>
  
    </div>
          <AuthDetails/>
          </>
  )
}

export default Weather_App
