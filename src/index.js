import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing the latest way to create a root
import App from './App'; // Importing your App component

// Creating a root to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
