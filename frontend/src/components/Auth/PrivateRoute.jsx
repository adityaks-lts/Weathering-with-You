import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user")) || null;
    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
