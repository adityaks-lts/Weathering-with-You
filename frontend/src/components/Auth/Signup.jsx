import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Button, Text, VStack, Heading, FormControl, FormLabel, InputGroup, InputRightElement } from '@chakra-ui/react';
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://weathering-with-you-zfyi.onrender.com/users', { email, password, favorites:[] });
            navigate('/login'); 
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <div className="login-section">
          <form onSubmit={handleSignup}>
            <VStack spacing={4} bg='white'>
              <Heading>Sign Up</Heading>
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
              <Link to="/login"></Link>
              <Button isLoading={loading} loadingText="Logging in" type="submit" colorScheme="blue" width="full">
                Login
              </Button>
              <Text mt={4} textAlign="center" bg='white'>
                Already have an account?{' '}
                <Link to="/signup">
                  <Text as="u" color="blue.500">
                    Login
                  </Text>
                </Link>
              </Text>
            </VStack>
          </form>
        </div>
    );
};

export default Signup;
