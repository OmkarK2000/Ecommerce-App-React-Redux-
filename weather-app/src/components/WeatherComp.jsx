import { useState } from "react";
import { FaCloudMoon } from "react-icons/fa6";

const WeatherComp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [isError, setIsError] = useState(false)
  const key = "902778c34af9b54a30597c040f155b42";
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    if (city === "") {
      return;
    }

    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
    if (result.cod == 404) {
      setIsError(true)
    } else {
      // other status like 200
      setWeatherData(result);
      setIsError(false)
      setCity("")
    }
  };



  const windDirection = (deg) => {
    if (deg >= 0 && deg <= 23) {
      return "North";
    }
    else if (deg >= 337 && deg <= 360) {
      return "North";
    }
    else if (deg >= 24 && deg <= 68) {
      return "Northeast";
    }
    else if (deg >= 69 && deg <= 113) {
      return "East";
    }
    else if (deg >= 114 && deg <= 158) {
      return "Southeast";
    }
    else if (deg >= 159 && deg <= 203) {
      return "South";
    }
    else if (deg >= 204 && deg <= 148) {
      return "Southwest";
    }
    else if (deg >= 249 && deg <= 293) {
      return "West";
    }
    else if (deg >= 294 && deg <= 336) {
      return "Northwest";
    }
  };

  const degSym = () => {
    return <i>{'\u00b0'}</i>;
  };

  return (
    <div className="flex flex-col mt-8">
      <div className="flex justify-center my-4">
        <input className="w-[220px] bg-gray-200 text-sky-700 font-bold px-2 py-1 outline-none rounded" required type="text" value={city} placeholder="Enter city name" onChange={(e) => setCity(e.target.value)} />
        <button className="ml-2 bg-red-400 p-1 rounded hover:bg-red-700 font-bold" onClick={fetchWeatherData}>Search</button> <br />
      </div>
      {isError ? <h1 className="text-2xl text-center mt-4">Enter valid city name</h1> 
      :     
      weatherData && (
        <>
          <div className="flex justify-evenly flex-col lg:flex-row mt-8 ">
            <div className="text-center lg:text-left p-5">
              <h1 className="text-4xl font-bold md:text-6xl">{weatherData.city.name}, {weatherData.city.country}</h1>
              <h4 className="text-2xl md:text-4xl md:my-6">{weatherData.list[0].dt_txt.slice(0, 10)}</h4>
              <div className="flex my-6 justify-center ">
                <FaCloudMoon size={100} />
                <div className="px-5 ">
                  <p className="text-6xl flex">{Math.round(weatherData.list[0].main.temp) - 273}{degSym()}</p>
                  <span className="text-2xl md:text-3xl">{(weatherData.list[0].weather[0].description)} </span>
                </div>
              </div>
            </div>
            <span className="bg-gray-400 w-[1px]"></span>
            <div className="flex items-center justify-center">
              <div>
                <div className="flex gap-10 text-2xl">
                  <span className="md:text-4xl"><span className="flex">{Math.round(weatherData.list[0].main.temp_max) - 273} {degSym()}  </span> Max temp.</span>
                  <span className="md:text-4xl">{(weatherData.list[0].wind.speed)} <br /> Wind speed</span>
                </div>
                <div className="flex gap-10 text-2xl mt-6">
                  <span className="md:text-4xl"><span className="flex">{Math.round(weatherData.list[0].main.temp_min) - 273} {degSym()}  </span> Min temp.</span>
                  <span className="md:text-4xl">{windDirection(Math.round(weatherData.list[0].wind.deg))}  <br /> Wind direction. </span>
                </div>
              </div>

            </div>
          </div>


        </>
      )
    }


    </div>
  )
}

export default WeatherComp