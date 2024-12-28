import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';


const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const favoriteCities = ['New York', 'Los Angeles'];

  const fetchWeather = async () => {
    try {
      const apiKey = '123afeabafab4e5649b3dffd5a3b5705';  
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError(null);
    } catch (err) {
      setError('City not found');
      setWeather(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  const handleFavoriteClick = (favoriteCity) => {
    setCity(favoriteCity); 
    fetchWeather(favoriteCity); // Fetch weather for the favorite city
  };

  return (
    // <div className='div1'>
    <div className="weather-container">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
        /><button type="submit">Get Weather</button>
      </form>

      <h2>Favorite Cities</h2>
      <div className="favorite-cities">
        {favoriteCities.map((favoriteCity) => (
          <button
            key={favoriteCity}
            onClick={() => handleFavoriteClick(favoriteCity)}
          >
            {favoriteCity}
          </button>
        ))}
      </div>

      {error && <p>{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
    //</div>
  );
};

export default Weather;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './Weather.css';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);
//   const [favoriteCities, setFavoriteCities] = useState([]); // Manage favorite cities dynamically

//   const fetchWeather = async (cityName) => {
//     try {
//       const apiKey = '123afeabafab4e5649b3dffd5a3b5705';
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
//       );
//       setWeather(response.data);
//       setError(null);
//     } catch (err) {
//       setError('City not found');
//       setWeather(null);
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchWeather(city);
//   };

//   // Manually add city to favorites
//   const handleAddToFavorites = () => {
//     if (weather && !favoriteCities.includes(weather.name)) {
//       setFavoriteCities((prevCities) => [...prevCities, weather.name]);
//     }
//   };

//   const handleFavoriteClick = (favoriteCity) => {
//     setCity(favoriteCity); // Optionally set the input field
//     fetchWeather(favoriteCity); // Fetch weather for the favorite city
//   };

//   return (
//     <div className="weather-container">
//       <h1>Weather App</h1>

//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Get Weather</button>
//       </form>

//       {weather && (
//         <div>
//           <h2>{weather.name}</h2>
//           <p>{weather.weather[0].description}</p>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>

//           {/* Display button to add the city to favorites */}
//           <button onClick={handleAddToFavorites}>Add to Favorites</button>
//         </div>
//       )}

//       {error && <p>{error}</p>}

//       {/* Display favorite cities */}
//       <h2>Favorite Cities</h2>
//       <div className="favorite-cities">
//         {favoriteCities.map((favoriteCity) => (
//           <button
//             key={favoriteCity}
//             onClick={() => handleFavoriteClick(favoriteCity)}
//           >
//             {favoriteCity}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Weather;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './Weather.css';

// const Weather = () => {
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState(null);
//   const [favoriteCities, setFavoriteCities] = useState([]); // Manage favorite cities dynamically
//   const [canAddFavorite, setCanAddFavorite] = useState(false); // Check if the "Add to Favorites" button should be enabled

//   const fetchWeather = async (cityName) => {
//     try {
//       const apiKey = '123afeabafab4e5649b3dffd5a3b5705';
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
//       );
//       setWeather(response.data);
//       setError(null);
//       setCanAddFavorite(true); // Enable "Add to Favorites" button after fetching the weather
//     } catch (err) {
//       setError('City not found');
//       setWeather(null);
//       setCanAddFavorite(false); // Disable "Add to Favorites" button if error occurs
//     }
//   };

//   const handleInputChange = (e) => {
//     setCity(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchWeather(city);
//   };

//   // Add city to favorites when clicked
//   const handleAddToFavorites = () => {
//     if (weather && !favoriteCities.includes(weather.name)) {
//       setFavoriteCities((prevCities) => [...prevCities, weather.name]);
//     }
//     setCanAddFavorite(false); // Disable "Add to Favorites" button once clicked
//   };

//   const handleFavoriteClick = (favoriteCity) => {
//     setCity(favoriteCity); // Optionally set the input field
//     fetchWeather(favoriteCity); // Fetch weather for the favorite city
//   };

//   return (
//     <div className="weather-container">
//       <h1>Weather App</h1>

//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Enter city"
//           value={city}
//           onChange={handleInputChange}
//         />
//         <button type="submit">Get Weather</button>
//       </form>

//       {weather && (
//         <div className='weather-info'>
//           <h2>{weather.name}</h2>
//           <p>{weather.weather[0].description}</p>
//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Wind Speed: {weather.wind.speed} m/s</p>

//           {/* Display button to add the city to favorites */}
//           {canAddFavorite && (
//             <button onClick={handleAddToFavorites}>Add to Favorites</button>
//           )}
//         </div>
//       )}

//       {error && <p>{error}</p>}

//       {/* Display favorite cities */}
//       {favoriteCities.length > 0 && (
//         <div>
//           <h2>Favorite Cities</h2>
//           <div className="favorite-cities">
//             {favoriteCities.map((favoriteCity) => (
//               <button
//                 key={favoriteCity}
//                 onClick={() => handleFavoriteClick(favoriteCity)}
//               >
//                 {favoriteCity}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;
