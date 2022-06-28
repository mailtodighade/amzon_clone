import React from 'react';
import {Provider}  from 'react-redux'
import store from './store'
import ReactDOM from 'react-dom/client';
import App from './components/App' 
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
    <App />
    </Provider>
);

