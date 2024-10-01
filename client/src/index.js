import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { SearchContextProvider } from './context/SearchContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
   <SearchContextProvider>
  <BrowserRouter>
  <App/>
</BrowserRouter>
</SearchContextProvider>
</AuthContextProvider>
</React.StrictMode>
);

