import axios from 'axios';

const API_URL = 'https://weathering-with-you-zfyi.onrender.com/users';

export const getFavorites = async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    localStorage.setItem("currCity",JSON.stringify(response.data.favorites))
    return response.data.favorites;
};

export const addFavorite = async (userId, city) => {
    const response = await axios.patch(`${API_URL}/${userId}`, {favorites:[...JSON.parse(localStorage.getItem("currCity")) || [] ,city] });
    return response.data;
};

export const removeFavorite = async (userId, city) => {
    const filtered = JSON.parse(localStorage.getItem("currCity")).filter(elem => {
        // console.log(elem, city)
        return elem != city
    }) || [];
    
    const response = await axios.patch(`${API_URL}/${userId}`,{favorites:[...filtered]});
    localStorage.setItem("currCity",JSON.stringify(filtered))
    return response.data;
};
