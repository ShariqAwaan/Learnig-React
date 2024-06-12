import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

function WeatherApp() {
  const [city , setCity] = useState('Abbottabad');
  const [country ,setCountry] = useState('PK');
  const [feelsLike , setFeelsLike] = useState('');
  const [minTemp , setMinTemp] = useState('');
  const [maxTemp , setMaxTemp] = useState('');
  // const [latitude, setLatitude] = useState(34.1688);
  // const [longitude, setLongitude] = useState(73.2215);
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
    if (city !== ''){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=matric&appid=dc50216f2f07a56748c3ad1a98593fde`).
      then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('API Response:', data);

          setCountry(data.sys.country);
          setCity(data.name);
          setTemperature(data.main.temp);
          setFeelsLike(data.main.feels_like);
          setMinTemp(data.main.temp_min);
          setMaxTemp(data.main.temp_max);
          setError(null);
        })
        .catch(error => {
          console.error('No city Found with this name', error);
          setError('No City Found with this name');
        });
      }else {
        setCountry('');
        setTemperature('');
        setFeelsLike('');
        setMaxTemp('');
        setMinTemp('')
      }
    }, 500)
    return () => clearTimeout(timer);
    }
  , [city]);

  // const handleLatChange = (e) => {
  //   setLatitude(e.target.value);
  // };

  // const handleLongChange = (e) => {
  //   setLongitude(e.target.value);
  // };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  

  const handleClick = (e) => {
    e.preventDefault();
    setCity('Abbottabad');
    setCountry('PK');
    // setLatitude(latitude);
    // setLongitude(longitude);
  };

  return (
    <>
      <h1><i className="fa-solid fa-cloud"></i> Weather App</h1>

      <div className="mainDiv">
        {/* <input type="number" className="inputField" placeholder="Latitude" value={latitude} onChange={handleLatChange} />
        <input type="number" className="inputField" placeholder="Latitude" value={latitude} onChange={handleLatChange} /> */}
        <input type="text" className="inputField" placeholder="Enter City" value={city} onChange={handleCityChange} />
        <button className="resetButton" onClick={handleClick}>
         Abbottabad
        </button>


        {error ? (
          <h5>{error}</h5>
          ) :  (
            <>
            <h2><i class="fa-solid fa-location-dot"></i>{city},{country}</h2>
            <h2>Temperature: <i class="fa-solid fa-temperature-half"></i>
            {Math.round(temperature - 273)}°C</h2>
            <h4>Feels Like :<i class="fa-solid fa-cloud-bolt"></i>
              {Math.round(feelsLike - 273)}°C</h4>
            <h4>Min_Temp :<i class="fa-solid fa-temperature-arrow-down"></i>
            {Math.round(minTemp - 273)}°C</h4>
            <h4>Max_Temp :<i class="fa-solid fa-temperature-arrow-up"></i>
              {Math.round(maxTemp - 273)}°C</h4>
            </>
        ) }


        {/* <h2>{error}</h2>
        <h4>Temperature: {Math.round(temperature - 273)}°C</h4> */}
      </div>
    </>
  );
}

export default WeatherApp;
