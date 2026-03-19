import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// FR: Point d'entrée de l'application | EN: Application entry point
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* FR: Composant principal | EN: Main component */}
  </React.StrictMode>
);