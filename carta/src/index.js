import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfiguracionProvider } from './context/ConfiguracionContext'; // Importar el proveedor de configuración

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfiguracionProvider>
      <ToastContainer />
      <App />
    </ConfiguracionProvider>
  </React.StrictMode>
);

reportWebVitals();
