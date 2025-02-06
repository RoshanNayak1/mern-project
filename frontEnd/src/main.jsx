import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from 'react-router-dom';
// import { ChakraProvider } from '@chakra-ui/react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <Provider>
    <App/>
  </Provider>
  </BrowserRouter>
   
  </StrictMode>,
);
