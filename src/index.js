import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { DarkModeProvider } from './Hooks/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </DarkModeProvider>

);

