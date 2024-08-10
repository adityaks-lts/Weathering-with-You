import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const WeatherDisplay = ({ weatherData, forecastData }) => {
    if (!weatherData || !forecastData) return null;

    return (
        <Box>
            <Text>{weatherData.name}</Text>
            <Text>{weatherData.main.temp}°</Text>
            <Text>{weatherData.weather[0].description}</Text>
            <Box style={{display:"flex", gap:"5px", flexWrap:"wrap"}}>
                {forecastData.list.map((forecast, index) => (
                    <Box style={{borderRadius:"10px"}} border={"1px solid"} padding={"5px"} key={index}>
                        <Text>{"20"+forecast.dt_txt}</Text>
                        <Text>{forecast.main.temp}°</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default WeatherDisplay;
