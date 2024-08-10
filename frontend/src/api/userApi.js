import axios from 'axios';

const API_URL = 'http://localhost:3000/user';

export const getFavorites = async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}/favorites`);
    return response.data;
};

export const addFavorite = async (userId, city) => {
    const response = await axios.post(`${API_URL}/${userId}/favorites`, { city });
    return response.data;
};

export const removeFavorite = async (userId, city) => {
    const response = await axios.delete(`${API_URL}/${userId}/favorites/${city}`);
    return response.data;
};
