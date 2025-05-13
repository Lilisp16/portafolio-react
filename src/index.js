import React from 'react';
import './i18n'; // Importa el archivo que contiene la configuración de i18next
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);