import React, { useState, useContext } from 'react';
import { Input, Button, Text, VStack, Heading, FormControl, FormLabel, InputGroup, InputRightElement } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.get('https://weathering-with-you-zfyi.onrender.com/users');
            const users = response.data;

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                login(user);
                navigate('/'); // Redirect to the dashboard
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error("Login failed", error);
            setError('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="login-section">
          <form onSubmit={handleLogin}>
            <VStack spacing={4} bg='white'>
              <Heading>Login</Heading>
              <FormControl isRequired bg='white'>
                <FormLabel bg='white'>Username</FormLabel>
                <Input
                  type="email"
                  name="Email"
                  placeholder="Email for eg: aditya@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: '1px solid' }}
                />
              </FormControl>
              <FormControl isRequired bg='white'>
                <FormLabel bg='white'>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={show ? 'text' : 'password'}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value )}
                    style={{ border: '1px solid' }}
                  />
                  <InputRightElement  width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={()=>{setShow(!show)}}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Link to="/signup"></Link>
              <Button isLoading={loading} loadingText="Logging in" type="submit" colorScheme="blue" width="full">
                Login
              </Button>
              <Text mt={4} textAlign="center" bg='white'>
                Don't have an account?{' '}
                <Link to="/signup">
                  <Text as="u" color="blue.500">
                    Sign Up
                  </Text>
                </Link>
              </Text>
            </VStack>
          </form>
        </div>
      )
};

export default Login;
