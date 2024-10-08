import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherDashboard from './components/WeatherDashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './components/Auth/PrivateRoute'; // Create this to protect routes
import { Heading } from '@chakra-ui/react';

const App = () => {
    return (
        <AuthProvider>
          <Heading style={{backgroundColor:"skyblue", color:"white"}}>Withering with you</Heading>
            <Router>
                <Routes>
                    <Route path="/" element={<PrivateRoute><WeatherDashboard /></PrivateRoute>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
