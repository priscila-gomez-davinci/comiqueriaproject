import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambia la importación a 'react-dom/client'
import { Provider } from 'react-redux';
import store from './Components/Store/Store'; // Asegúrate de que la ruta sea correcta
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Crea el root

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);