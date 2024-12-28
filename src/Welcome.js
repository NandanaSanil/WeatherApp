import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css'


const Welcome = () => {
  const navigate = useNavigate();

  const goToWeather = () => {
    navigate('/weather');
  };

  return (
    <div className='App'>
      <h1 className="weatherapp">Welcome</h1>
      <div className='daw'>
      <button onClick={goToWeather} className='button1'>Go to Weather App</button>
      </div>
    </div>
  );
};

export default Welcome;
