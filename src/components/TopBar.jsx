import React, { useState, useEffect } from 'react';
import './TopBar.css';

const TopBar = () => {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState({ temp: '--', icon: '☀️' });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const fetchWeather = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=19.0760&longitude=72.8777&current_weather=true');
        const data = await response.json();
        console.log('Mumbai Weather Data:', data);
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        const isDay = data.current_weather.is_day;
        
        let icon = isDay ? '☀️' : '🌙';
        if (code >= 1 && code <= 3) icon = isDay ? '⛅' : '☁️';
        else if (code >= 45 && code <= 48) icon = '🌫️';
        else if (code >= 51 && code <= 77) icon = '🌧️'; // Drizzle, Rain, Snow
        else if (code >= 80 && code <= 86) icon = isDay ? '🌦️' : '🌧️';
        else if (code >= 95) icon = '⛈️';
        
        setWeather({ temp, icon });
      } catch (err) {}
    };

    fetchWeather();
    return () => clearInterval(timer);
  }, []);

  const mumbaiTime = time.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const mumbaiDate = time.toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="top-bar">
      <div className="info">Mumbai {mumbaiTime} · {mumbaiDate}<br/>{weather.temp}°C {weather.icon}</div>
    </div>
  );
};

export default TopBar;
