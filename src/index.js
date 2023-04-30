import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { APIContextProvider } from './components/Global/APIContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <APIContextProvider>
        <App />
    </APIContextProvider>
);