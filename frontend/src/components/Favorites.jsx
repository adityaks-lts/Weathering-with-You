import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext';
import { getFavorites, addFavorite, removeFavorite } from '../api/userApi';

const Favorites = ({ fetchWeatherData , weatherData}) => {
    const user  = JSON.parse(localStorage.getItem("user"));
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (user) {
            getFavorites(user.id).then(setFavorites);
        }
    }, [user]);

    const handleAddFavorite = (city) => {
        if (user) {
            addFavorite(user.id, city).then(() => {
                setFavorites([...favorites, city]);
            });
        }
        console.log(user)
    };

    const handleRemoveFavorite = (city) => {
        if (user) {
            removeFavorite(user.id, city).then(() => {
                setFavorites(favorites.filter(fav => fav !== city));
            });
        }
    };

    return (
        <Box>
            <Text>Your Favorites</Text>
            {favorites.map((city, index) => (
                <Box key={index} style={{border:"1px solid", padding:"20px", borderRadius:"10px"}}>
                    <Text onClick={() => fetchWeatherData(city)}>{city}</Text>
                    <Button onClick={() => handleRemoveFavorite(city)}>Remove</Button>
                </Box>
            ))}
            <Button onClick={() => handleAddFavorite(weatherData.name)}>Add New City</Button>
        </Box>
    );
};

export default Favorites;
