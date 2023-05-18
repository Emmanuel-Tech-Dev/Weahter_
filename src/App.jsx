import { useState} from 'react';
import moment from 'moment/moment';
import './App.css';

// importing all components
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Stats from './components/Stats';


const divBlock = () => {
  return (
     <div>
      <h1 className="absolute top-[50%] text-center left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-semibold text-red-600">
        Location is not available. Please enter a valid location.
      </h1>
    </div>
  )
}

function App() {
  // initaiting all state varibales
  const [weather, setWeather] = useState(null);
  const [uvIndex, setUVIndex] = useState(null);
  const [search, setSearch] = useState('');

  const [isDark , setIsDark] = useState(false)

  const handleTheme = () => {
    setIsDark(!isDark)
  }

  //converting the surise figure to a real time data
  const sunrise = weather?.sys?.sunrise;
  const formattedSunrise = sunrise ? moment(sunrise).format('HH:mm A') : '';

  const sunset = weather?.sys?.sunset;
  const formattedSunset = sunset ? moment(sunset).format("HH:mm A") : '';


  // Peroforming a query search of data by search the contry
  const searchPressed = () => {
    const searchQuery = search.trim();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=78ea93dd4ff712eec346298dd017ba71`
    )
      .then((res) => res.json())
      .then((data) => {
        if(data === "404" || data === undefined ){
          setWeather(undefined);
          setUVIndex(null);
          divBlock()
        }else{
          setWeather(data); 
          
          const { coord } = data;
        fetch(
          `https://api.openweathermap.org/data/2.5/uvi?lat=${coord.lat}&lon=${coord.lon}&appid=78ea93dd4ff712eec346298dd017ba71`
        )
          .then((res) => res.json())
          .then((uvData) => setUVIndex(uvData.value));
        }
        
       
      })
      .catch((error) => {
        console.error(error);
        setWeather(undefined);
        setUVIndex(null);
         setSearch(''); // Reset the search input
      });

   
  };

//  I will be working this part of the project later , im researching on a free api where i can fetch the montly rainlfall and yearly rainfall calculation 
//  useEffect(() => {
//     const apiKey = 'XE2797RHXTU6Q2H9KJTLPZZM5';
//     const location = "Texas"; // Specify the location for which you want historical weather data
//     const startDate = '2023-01-01'; // Start date of the date range
//     const endDate = '2023-12-31'; // End date of the date range

//     const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}?key=${apiKey}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         // Process the retrieved historical weather data
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [search]);


    const getCurrentDay = () => {
    return moment().format('dddd');
   };


// converting Kelvin to degrees celcius
const kelvin = weather && weather.main.temp
const celcius = kelvin - 273.15
const output = Math.round(celcius)

 const weatherIcon =weather && weather.weather[0]?.description;
 
  return (
    <>
 <div className={!isDark ? "" : 'dark-mode max-h-full pb-5 md:h-[100vh]'}>
          <NavBar 
      handleChange={(e) => setSearch(e.target.value)} 
      handleClick={searchPressed} 
      darkmode={handleTheme} 
      mode={isDark}
      />

    {weather === undefined && uvIndex === null ? 
    divBlock() : (
      <>
     
          <Hero
            location={weather && weather.name ? weather.name : 'Location Unavailable'}
            temperature={weather && weather.main !== 'undefined' ? output : 'Unavailable'}
            sunrise={formattedSunrise}
            sunset={formattedSunset}
            currentDay={getCurrentDay()}
             mode={isDark}
            // country= {weather.sys.country}
          />

          {weather && (
            <Stats
              stats={typeof weather.main !== 'undefined' ? weather.main.humidity : 'Data not available'}
              sunrise={formattedSunrise}
              sunset={formattedSunset}
              unIndex={uvIndex}
              windy={weather.wind.deg}
              clouds={weatherIcon}
               mode={isDark}
            />
          )}
        </> 
       
    )}
    

      </div>
    
      
    
    </>
  );
}

export default App;