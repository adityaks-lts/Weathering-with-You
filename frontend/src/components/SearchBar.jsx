import React, { useState } from 'react';
import { Input, Button, Box } from '@chakra-ui/react';

const SearchBar = ({ fetchWeatherData }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        fetchWeatherData(city);
        localStorage.setItem('lastSearch', city);
    };

    return (
        <Box>
            <Input
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
        </Box>
    );
};

export default SearchBar;
