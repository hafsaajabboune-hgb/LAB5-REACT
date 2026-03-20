import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Application entry point / Point d'entrée de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Main component / Composant principal */}
  </React.StrictMode>
);
