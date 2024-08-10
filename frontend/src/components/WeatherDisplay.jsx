import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const WeatherDisplay = ({ weatherData, forecastData }) => {
    if (!weatherData || !forecastData) return null;

    return (
        <Box>
            <Text>{weatherData.name}</Text>
            <Text>{weatherData.main.temp}°</Text>
            <Text>{weatherData.weather[0].description}</Text>
            <Image src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="weather icon" />
            <Box>
                {forecastData.list.map((forecast, index) => (
                    <Box key={index}>
                        <Text>{forecast.dt_txt}</Text>
                        <Text>{forecast.main.temp}°</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default WeatherDisplay;
