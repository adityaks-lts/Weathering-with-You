import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
  < ChakraProvider>
    <App />
  </ ChakraProvider>,
)
