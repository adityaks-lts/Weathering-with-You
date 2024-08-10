import React, { useState, useEffect } from 'react';
import { Box, Flex, Spacer, Switch } from '@chakra-ui/react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import { getCurrentWeather, getFiveDayForecast } from '../api/weatherApi';

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [units, setUnits] = useState('metric');

    const fetchWeatherData = (location) => {
        getCurrentWeather(location, units).then(data => setWeatherData(data));
        getFiveDayForecast(location, units).then(data => setForecastData(data));
    };

    const toggleUnits = () => {
        setUnits(prevUnits => prevUnits === 'metric' ? 'imperial' : 'metric');
    };

    useEffect(() => {
        const lastSearch = localStorage.getItem('lastSearch') || 'New York';
        fetchWeatherData(lastSearch);
    }, [units]);

    return (

        <Box>
            <SearchBar fetchWeatherData={fetchWeatherData} />
            <Switch isChecked={units === 'metric'} onChange={toggleUnits}>
                Toggle to {units === 'metric' ? 'Fahrenheit' : 'Celsius'}
            </Switch>
            <Flex justifyContent={"space-around"}>
                <WeatherDisplay weatherData={weatherData} forecastData={forecastData} />
                {/* <Spacer/> */}
                <Favorites  weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
            </Flex>
        </Box>
    );
};

export default WeatherDashboard;
