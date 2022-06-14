import React, { useState } from 'react';
import MainInfo from '../main-info/MainInfo';
import HourContainer from '../hour-container/HourContainer';
import WeekContainer from '../week-container/WeekContainer';
import AdditionalData from '../additional-data/AdditionalData';
import Current from '../current/Current';
import './Search';

const api = {
    key: "7d71ea796959585356d0087f465a431c",
    base: "https://api.openweathermap.org/data/2.5/"
}

function Search () {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const searchWeather = event => {
        if (event.key === 'Enter') {
            fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
            .then(response => response.json())
            .then(result => {
                setWeather(result);
                setQuery('');
            });
        }
    }

    return (
        <div className="searchWeather">
            <div className="inputHolder">
                <input 
                type="text"
                className="searchInput"
                placeholder="Search for a city"
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={searchWeather} />
                <span className="icon-search"></span>
            </div>  
            {(typeof weather.city != 'undefined') ? (
                <div className="cityCard">
                    <MainInfo weather = {weather} />
                    <HourContainer weather = {weather} />
                    <WeekContainer weather = {weather} /> 
                    <AdditionalData weather = {weather} />
                </div>
            ) : (
                <Current />
            )}
        </div>    
    )   
}
  
export default Search;