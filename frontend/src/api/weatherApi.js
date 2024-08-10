import axios from 'axios';

const API_KEY = "3ec967a320a000431d54c03dab5ede2d";

export const getCurrentWeather = async (city, units = 'metric') => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${API_KEY}`);
    return response.data;
};

export const getFiveDayForecast = async (city, units = 'metric') => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`);
    return response.data;
};
